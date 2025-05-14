import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://13.219.100.239:5001/api/Product', {
        name,
        description,
        price: parseFloat(price)
      });
      alert('Product added successfully!');
      setName('');
      setDescription('');
      setPrice('');
    } catch (err) {
      console.error(err);
      alert('Error adding product');
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleAddProduct}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;