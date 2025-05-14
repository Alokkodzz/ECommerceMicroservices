import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/add-product">Add Product</Link>
      <Link to="/create-order">Create Order</Link>
      <Link to="/order-history">Order History</Link>
    </div>
  )
}

export default Navbar
