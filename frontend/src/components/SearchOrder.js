import React, { useState } from 'react';
import axios from 'axios';

const SearchOrder = () => {
  const [orderID, setOrderID] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);

  const handleSearch = async () => {
    axios.get(`http://localhost:5000/api/orders/${orderID}`)
      .then((response) => {
        setOrderDetails(response.data); // Set the order details here
      })
      .catch((error) => {
        console.error('Error fetching order:', error);
      });
  };

  return (
    <div>
      <h2>Search Order by OrderID</h2>
      <input
        type="text"
        placeholder="Enter OrderID"
        value={orderID}
        onChange={(e) => setOrderID(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {orderDetails && (
        <div>
          <h3>Order Details:</h3>
          <p>Customer Name: {orderDetails.CustomerName}</p>
          <p>Product: {orderDetails.Product}</p>
          <p>Quantity: {orderDetails.Quantity}</p>
          <p>Order Date: {new Date(orderDetails.OrderDate).toDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default SearchOrder;
