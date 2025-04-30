import { useState } from 'react'
import './App.css'
import './index.css'
import Layout from './Layouts/Layouts'
import Products from './components/Products'

function App() {
  return (
    <>
      <html data-theme="garden"></html>
      <Layout>
        <Products>

        </Products>
      </Layout>
    </>
  )
}

export default App
