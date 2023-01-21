import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const sam = ['Mobile', 'Women'];
const Nav = ({ leng , refresh }) => {
  //leng carryes length of the cart items
console.log("me" , refresh);
  const [fil, setFil] = useState([]);
 
  //update the every time of data add we use dependancy
  useEffect(() => {
    jsonfilter();
  }, [refresh]);

  const jsonfilter = async () => {
    const Request = await fetch('https://63ad89c3da81ba97619fc5c2.mockapi.io/products');
    const Response = await Request.json();

    const final = [];
    Response.forEach((ele) => {
      if (final.indexOf(ele.catagory) == -1) {
        final.push(ele.catagory);
      }
    });

    setFil(final);
  };

  return (
    <>
      <Link to="/"> Main </Link>
      {fil.map((ele) => {
        return <Link to={ele}>{ele} &nbsp; </Link>;
      })}

      <Link to="/Cart">
        {' '}
        CART<sup>{leng}</sup>{' '}
      </Link>

      <Link to="/AddProducts"> AddProducts </Link>
      <Link to="/Profile">Profile</Link>
    </>
  );
};

export default Nav;
