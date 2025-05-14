import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://13.219.100.239:5001/api/Product');
      setProducts(response.data);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch products');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.description} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;