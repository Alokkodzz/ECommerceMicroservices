import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'
import CreateOrder from './components/CreateOrder'
import OrderHistory from './components/OrderHistory'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/create-order" element={<CreateOrder />} />
        <Route path="/order-history" element={<OrderHistory />} />
      </Routes>
    </Router>
  )
}

export default App
