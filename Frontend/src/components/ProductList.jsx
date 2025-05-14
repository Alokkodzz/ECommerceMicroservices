import React, { useEffect, useState } from 'react'

function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5001/api/Product')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className="container">
      <h2>Available Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h4>{product.name}</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
