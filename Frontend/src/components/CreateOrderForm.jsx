import React, { useState } from 'react'
import { orderApi } from '../api/api'

function CreateOrderForm() {
  const [form, setForm] = useState({
    productId: '',
    quantity: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    orderApi.post('/orders', {
      productId: parseInt(form.productId),
      quantity: parseInt(form.quantity)
    }).then(() => {
      alert('Order created!')
      onCreated()
    }).catch(err => console.error(err))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 border rounded mb-8">
      <h2 className="text-xl font-bold">Add New Order</h2>
      <input type="number" name="productId" value={form.productId} onChange={handleChange} placeholder="Product ID" required className="border p-2 w-full" />
      <input type="number" name="quantity" value={form.quantity} onChange={handleChange} placeholder="Quantity" required className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Create Order</button>
    </form>
  )
}

export default CreateOrderForm
