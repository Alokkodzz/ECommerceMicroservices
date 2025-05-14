import React, { useState } from 'react'
import { productApi } from '../api/api'

function CreateProductForm() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    productApi.post('/products', {
      name: form.name,
      description: form.description,
      price: parseFloat(form.price)
    }).then(() => {
      alert('Product created!')
      onCreated()
    }).catch(err => console.error(err))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 border rounded mb-8">
      <h2 className="text-xl font-bold">Add New Product</h2>
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="border p-2 w-full" />
      <input type="text" name="description" value={form.description} onChange={handleChange} placeholder="Description" required className="border p-2 w-full" />
      <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price" required className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Create Product</button>
    </form>
  )
}

export default CreateProductForm
