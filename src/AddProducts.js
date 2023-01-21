import React, { useState, useEffect } from 'react';

const AddProducts = ({ getinfo }) => {
  const [coll, setColl] = useState({});
  const onChangeHandilar = (ele) => {
    setColl({ ...coll, [ele.target.name]: ele.target.value }); 
  };

  //We use preventDefault to stop the actions which are in pending   (without pd error occurs)
  const onSubmitHandilar = (e) => {
    e.preventDefault();

    const inpObj = {
      title: coll.title,
      catagory: coll.catagory,
      price: coll.price,
      aprice: coll.aprice,
      image: coll.image,
    };

    const ResponseSend = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inpObj),
    };

    fetch('https://63ad89c3da81ba97619fc5c2.mockapi.io/products', ResponseSend)
      .then((obj) => obj.json())
      .then((coll) =>
        setColl({ title: '', catagory: '', price: '', aprice: '', image: '' })
      );

    alert('success');
    getinfo(coll);
  };

  return (
    <>
      <form onSubmit={onSubmitHandilar}>
        <br />
        <br />

        <input
          type="text"
          name="title"
          value={coll.title}
          onChange={onChangeHandilar}
        />
        <br />
        <br />
        <input
          type="text"
          name="catagory"
          value={coll.catagory}
          onChange={onChangeHandilar}
        />
        <br />
        <br />
        <input
          type="text"
          name="price"
          value={coll.price}
          onChange={onChangeHandilar}
        />
        <br />
        <br />
        <input
          type="text"
          name="aprice"
          value={coll.aprice}
          onChange={onChangeHandilar}
        />
        <br />
        <br />
        <input
          type="text"
          name="image"
          value={coll.image}
          onChange={onChangeHandilar}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default AddProducts;
