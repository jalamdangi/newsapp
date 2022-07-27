import React,{useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Product from './Pages/Product';
import Paymentpage from './Pages/Paymentpage';
import Checkout from './Pages/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Signup></Signup>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/products' element={<Product></Product>}></Route>
          <Route path='/paymentpage' element={<Paymentpage></Paymentpage>}></Route>
          <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        </Routes>
      </BrowserRouter>
    </>    
  );
}

export default App;
