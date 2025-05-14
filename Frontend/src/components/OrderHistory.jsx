import React, { useEffect, useState } from 'react'

function OrderHistory() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch('http://localhost:5002/api/Orders')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [])

  return (
    <div className="container">
      <h2>Your Orders</h2>
      {orders.map((order, index) => (
        <div key={index} className="product-card">
          <h4>{order.productName}</h4>
          <p>Quantity: {order.quantity}</p>
        </div>
      ))}
    </div>
  )
}

export default OrderHistory
