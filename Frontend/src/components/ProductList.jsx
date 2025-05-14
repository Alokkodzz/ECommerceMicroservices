import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "" });

  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:5000/api/product");
    setProducts(response.data);
  };

  const createProduct = async () => {
    await axios.post("http://localhost:5000/api/product", newProduct);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product Service</h2>
      <input placeholder="Name" onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
      <input placeholder="Description" onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} />
      <input placeholder="Price" onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })} />
      <button onClick={createProduct}>Create Product</button>
      <ul>
        {products.map((p, idx) => (
          <li key={idx}>{p.name} - {p.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
