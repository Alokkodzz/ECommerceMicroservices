import React from 'react';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import CreateOrder from './components/CreateOrder';

function App() {
  return (
    <div className="container">
      <h1>Microservices Dashboard</h1>
      <AddProduct />
      <ProductList />
      <CreateOrder />
    </div>
  );
}

export default App;