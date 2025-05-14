import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5002/api/orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="order-list">
      <h3>Order List</h3>
      {orders.length === 0 ? (
        <p>No orders available</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              Order ID: {order.id} | Product ID: {order.productId} | Quantity: {order.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderList;
