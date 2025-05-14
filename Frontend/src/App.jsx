import React from 'react'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import OrderList from './components/OrderList'

function App() {
  return (
    <div>
      <NavBar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Product Service</h1>
        <ProductList />
        <h1 className="text-3xl font-bold mt-12 mb-4">Order Service</h1>
        <OrderList />
      </div>
    </div>
  )
}

export default App
