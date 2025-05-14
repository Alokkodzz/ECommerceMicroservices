import React, { useState } from 'react'

function AddProduct() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const product = { name, price, imageUrl: image }

    fetch('http://13.219.100.239:5001/api/Product', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
    .then(() => alert('Product Added!'))
  }

  return (
    <div className="container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
        <input type="text" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct
