import React, { useEffect, useState } from 'react'
import { productApi } from '../api/api'

function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    productApi.get('/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="space-y-4">
      {products.map(product => (
        <div key={product.id} className="p-4 border rounded bg-white">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p>{product.description}</p>
          <p className="text-green-600 font-semibold">${product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductList
