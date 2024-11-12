import React, { useState } from 'react';
import axios from 'axios';

const DeleteOrder = () => {
  const [orderID, setOrderID] = useState('');

  const handleDelete = async () => {
    axios.delete(`http://localhost:5000/api/orders/${orderID}`)
      .then((response) => {
        console.log('Order deleted:', response.data);
      })
      .catch((error) => {
        console.error('Error deleting order:', error);
      });
  };

  return (
    <div>
      <h2>Delete Order by OrderID</h2>
      <input
        type="text"
        placeholder="Enter OrderID"
        value={orderID}
        onChange={(e) => setOrderID(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteOrder;
