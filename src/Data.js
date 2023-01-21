import React, { useState, useEffect } from 'react';
import Pangination from './Pangination ';
import { useParams, Link } from 'react-router-dom';

const Data = ({ ResivedData }) => {
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState([]);

  //the last peace of code match
  const { id } = useParams();

  //collecting api portal
  useEffect(() => {
    jsondata();
  }, [id]);

  //function for collecting api portal
  const jsondata = () => {
    fetch(`https://63ad89c3da81ba97619fc5c2.mockapi.io/products/?catagory=${id}`)
      .then((obj) => obj.json())
      .then((final) => {
        setData(final), setPerPage(final.slice(0, 5));
      });
  };

  const PageNumbers = (page) => {
    setPerPage(data.slice(page * 5 - 5, page * 5));
  };

  return (
    <>
      {data.length >= 1 ? (
        <>
          <table border="1">
            {perPage.map((ele) => {
              return (
                <tr>
                  <td>{ele.id}</td>
                  <td>{ele.title}</td>
                  <td>{ele.price}</td>
                  <td>{ele.aprice}</td>
                  <img src={ele.image} width="50px" />
                  <td>
                    <button
                      onClick={() => {
                        ResivedData(ele);
                      }}
                    >
                      Add Cart
                    </button>

                    <Link to={`/More/${ele.id}`}>
                      <button>More</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </table>

          <Pangination data={data} PageNumbers={PageNumbers} />
        </>
      ) : (
        <center>
          <h1>Loading</h1>
        </center>
      )}
    </>
  );
};

export default Data;
