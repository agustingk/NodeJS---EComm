import { useState } from 'react'
import './App.css'
import './index.css'
import Layout from './Layouts/Layouts'
import Products from './components/Products'
import ProductDetail from './pages/ProductDetail'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home'

function App() {
  return (
    <>
      <html data-theme="garden"></html>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/detail/:id" element={<ProductDetail />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
