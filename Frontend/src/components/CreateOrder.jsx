import React, { useState } from 'react'

function CreateOrder() {
  const [productName, setProductName] = useState('')
  const [quantity, setQuantity] = useState('')

  const handleOrder = (e) => {
    e.preventDefault()
    const order = { productName, quantity }

    fetch('http://localhost:5002/api/Orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    })
    .then(() => alert('Order Placed!'))
  }

  return (
    <div className="container">
      <h2>Create New Order</h2>
      <form onSubmit={handleOrder}>
        <input type="text" placeholder="Product Name" value={productName} onChange={e => setProductName(e.target.value)} required />
        <input type="number" placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} required />
        <button type="submit">Place Order</button>
      </form>
    </div>
  )
}

export default CreateOrder
