import React, { useState, useEffect } from 'react';
import './style.css';
import Data from './Data';
import Nav from './Nav';
import { Routes, Route, Link } from 'react-router-dom';
import Cart from './Cart';
import AddProducts from './AddProducts';
import Main from './Main';
import Create from './Create';
import Profile from './Profile';

import More from './More';

export default function App() {
  //Storing Cart Data //Sending   Cart Data through maps
  const [storeData, setStoreData] = useState([]);

  //Reciving Cart Data
  const ResivedData = (ele) => {
    setStoreData([...storeData, { ...ele, Quantity: 1 }]);
  };

  //increment decrement Handilar
  const ChangeHandilar = (ele, incdec) => {
    const Arr = storeData;
    const ind = storeData.indexOf(ele);

    Arr[ind].Quantity += incdec;
    setStoreData([...Arr]);

    if (Arr[ind].Quantity == 0) Arr[ind].Quantity = 1;
  };

  //For Ternary Store
  const [storage, setStorage] = useState(null);

  //To Store Input Felds  data
  const [dataStore, setDatastore] = useState([]);

  //Collect Multiple Input Felds Data
  const onChangeHandilar = (abc) => {
    setDatastore({ ...dataStore, [abc.target.name]: abc.target.value });
  };

  const { user, pass } = dataStore;

  const onSubmitHandilar = (def) => {
    def.preventDefault();
    fetch('https://63ad89c3da81ba97619fc5c2.mockapi.io/users/' + user)
      .then((obj) => {
        return obj.json();
      })
      .then((final) => {
        if (Object.keys(final).length === 0) {
          alert('Felds are Empty');
        } else {
          if (final.id === user && final.password === pass) {
            localStorage.setItem('user', user);
            setStorage('Success');
          } else {
            alert('Please Enter valid credentials');
          }
        }
      });
  };

  //Refresh

  const [refresh, setRefresh] = useState([]);
  const infofunction = (name) => {
    setRefresh(name);
  };

  return (
    <div>
      {storage == null ? (
        <center>
          <form onSubmit={onSubmitHandilar}>
            <input type="text" name="user" onChange={onChangeHandilar} />
            <input type="text" name="pass" onChange={onChangeHandilar} />

            <button submit="submit"> Login </button>
            <h3>Username : Demo</h3>
            <h3>Password : 12345</h3>

            <br />
            <br />

            <Link to="/create">Create Account</Link>
          </form>
        </center>
      ) : (
        <>
          <Nav leng={storeData.length} refresh={refresh} />

          <button
            onClick={() => {
              setStorage(null);
            }}
          >
            Logout
          </button>
          <Routes>
            <Route path=":id" element={<Data ResivedData={ResivedData} />} />

            <Route path="/" element={<Main ResivedData={ResivedData} />} />
            <Route path="/Profile" element={<Profile />} />
            <Route
              path="/AddProducts"
              element={<AddProducts getinfo={infofunction} />}
            />
            <Route
              path="/Cart"
              element={<Cart data={storeData} Change={ChangeHandilar} />}
            />
          </Routes>
        </>
      )}
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/More/:shyam" element={<More />} />
      </Routes>
    </div>
  );
}

//in the nav portal we are sending Length of the cart to nav component.
