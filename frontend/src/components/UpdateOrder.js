import React, { useState } from 'react';
import axios from 'axios';

const UpdateOrder = () => {
  const [orderID, setOrderID] = useState('');
  const [updatedOrderData, setUpdatedOrderData] = useState({
    CustomerName: '',
    Product: '',
    Quantity: '',
    OrderDate: '',
  });

  const handleUpdate = async () => {
    axios.patch(`http://localhost:5000/api/orders/${orderID}`, updatedOrderData)
      .then((response) => {
        console.log('Order updated:', response.data);
      })
      .catch((error) => {
        console.error('Error updating order:', error);
      });
  };

  return (
    <div>
      <h2>Update Order by OrderID</h2>
      <input
        type="text"
        placeholder="Enter OrderID"
        value={orderID}
        onChange={(e) => setOrderID(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Quantity"
        value={updatedOrderData.Quantity}
        onChange={(e) => setUpdatedOrderData({ ...updatedOrderData, Quantity: e.target.value })}
      />
      
      <button onClick={handleUpdate}>Update Order</button>
    </div>
  );
};

export default UpdateOrder;
