import React, { useEffect, useState } from 'react'
import { orderApi } from '../api/api'

function OrderList() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    orderApi.get('/orders')
      .then(res => setOrders(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="space-y-4">
      {orders.map(order => (
        <div key={order.id} className="p-4 border rounded bg-white">
          <h2 className="text-lg font-bold">Order #{order.id}</h2>
          <p>ProductId: {order.productId}</p>
          <p>Quantity: {order.quantity}</p>
        </div>
      ))}
    </div>
  )
}

export default OrderList
