import React, { useRef } from 'react'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import OrderList from './components/OrderList'
import CreateProductForm from './components/CreateProductForm'
import CreateOrderForm from './components/CreateOrderForm'

function App() {
  const productListRef = useRef(null)
  const orderListRef = useRef(null)

  const reloadProducts = () => {
    productListRef.current.loadProducts()
  }

  const reloadOrders = () => {
    orderListRef.current.loadOrders()
  }

  return (
    <div>
      <NavBar />
      <div className="p-8 space-y-12">
        <div>
          <h1 className="text-3xl font-bold mb-4">Product Service</h1>
          <CreateProductForm onCreated={reloadProducts} />
          <ProductList ref={productListRef} />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">Order Service</h1>
          <CreateOrderForm onCreated={reloadOrders} />
          <OrderList ref={orderListRef} />
        </div>
      </div>
    </div>
  )
}

export default App
