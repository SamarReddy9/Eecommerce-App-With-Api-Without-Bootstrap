import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Create() {
  const [data, setData] = useState([]);

  const onChangeHandilar = (ele) => {
    setData({ ...data, [ele.target.name]: ele.target.value });
  };

  const { id, password } = data;
  console.log(id);

  const submit = (e) => {
    e.preventDefault();
    let obj = { id, password };
    //console.log(obj)
    fetch('https://63ad89c3da81ba97619fc5c2.mockapi.io/users', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        console.log('success');
      })
      .catch((op) => {
        console.log('fail');
      });
  };

  const [ref, setRef] = useState(null);
  console.log(ref);
  useEffect(() => {}, [ref]);

  return (
    <>
      <center>
        <form onSubmit={submit}>
          <input
            type="text"
            name="id"
            onChange={onChangeHandilar}
            placeholder="Enter Username"
          />
          <br />
          <br />
          <input
            type="text"
            name="password"
            onChange={onChangeHandilar}
            placeholder="Enter Username"
          />
          <br />
          <br />

          <button
            onClick={() => {
              setRef('Updated');
            }}
          >
            Create Account
          </button>
        </form>
      </center>
    </>
  );
}
export default Create;

// , alert("data added successfully")
