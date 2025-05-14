import React, { useState } from 'react';
import axios from 'axios';

function CreateOrder() {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleCreateOrder = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://13.219.100.239:5002/api/Orders', {
        productId: parseInt(productId),
        quantity: parseInt(quantity)
      });
      alert('Order created!');
      setProductId('');
      setQuantity('');
    } catch (err) {
      console.error(err);
      alert('Error creating order');
    }
  };

  return (
    <div>
      <h2>Create Order</h2>
      <form onSubmit={handleCreateOrder}>
        <input type="number" value={productId} onChange={(e) => setProductId(e.target.value)} placeholder="Product ID" required />
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" required />
        <button type="submit">Create Order</button>
      </form>
    </div>
  );
}

export default CreateOrder;