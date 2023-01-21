import React from 'react';

const Cart = ({ data, Change }) => {
  //data is api data of cart

  return (
    <>
      <table border="1">
        {data.map((ele) => {
          return (
            <>
              <tr>
                <td>{ele.title}</td>
                <td>{ele.price}</td>
                <td>{ele.aprice}</td>
                <img src={ele.image} width="50px" />
                <td>
                  <button onClick={() => Change(ele, -1)}> - </button>{' '}
                  {ele.Quantity} &nbsp;
                  <button onClick={() => Change(ele, +1)}> + </button>
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Cart;
