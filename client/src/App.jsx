import { useState } from 'react'
import './App.css'
import './index.css'
import Layout from './Layouts/Layouts'
import Products from './components/Products'
import ProductDetail from './pages/ProductDetail'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useSelector } from "react-redux";
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Checkout from './pages/Checkout';

function App() {

  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/products/:id" element={<ProductDetail />}></Route>
          <Route exact path="/login" element={userInfo ? <Navigate to="/"></Navigate> : <Login/>}></Route>
          <Route exact path="/register" element={userInfo ? <Navigate to="/"></Navigate>: <Register/>}></Route>
          {/* <Route exact path="/checkout" element={<Checkout />}></Route> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
