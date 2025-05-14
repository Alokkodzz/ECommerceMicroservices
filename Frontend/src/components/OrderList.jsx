import React, { useState, useEffect } from "react";
import axios from "axios";

function OrderList() {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({ productId: "", quantity: "" });

  const fetchOrders = async () => {
    const response = await axios.get("http://localhost:5000/api/orders");
    setOrders(response.data);
  };

  const createOrder = async () => {
    await axios.post("http://localhost:5000/api/orders", newOrder);
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Order Service</h2>
      <input placeholder="ProductId" onChange={(e) => setNewOrder({ ...newOrder, productId: parseInt(e.target.value) })} />
      <input placeholder="Quantity" onChange={(e) => setNewOrder({ ...newOrder, quantity: parseInt(e.target.value) })} />
      <button onClick={createOrder}>Create Order</button>
      <ul>
        {orders.map((o, idx) => (
          <li key={idx}>Product: {o.productId}, Quantity: {o.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
