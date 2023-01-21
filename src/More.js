import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const More = () => {
  const { shyam } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    getproducts();
  }, []);
  const getproducts = () => {
    fetch(`https://63ad89c3da81ba97619fc5c2.mockapi.io/products/${shyam}`)
      .then((res) => res.json())
      .then((result) => setData(result));
  };

  console.log('shyam', data);
  return (
    <>
      <table border="1">
        <tr>
          <td>{data.id}</td>
          <td>{data.title}</td>
          <td>{data.price}</td>
          <td>{data.aprice}</td>
          <td>{data.catagory}</td>
          <td>
            <img src={data.image} width="40px" />
          </td>
        </tr>
      </table>
    </>
  );
};

export default More;
