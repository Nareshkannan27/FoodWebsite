import React, { useState } from 'react';
import axios from 'axios';

function AddOrder() {
  const [formData, setFormData] = useState({
    OrderID: '',
    CustomerName: '',
    Product: '',
    Quantity: '',
    OrderDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make the POST request to the backend API
    axios
      .post('http://localhost:5000/api/orders', formData)
      .then((response) => {
        console.log('Order added:', response.data);
        alert('Order added successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error adding the order.');
      });
  };

  return (
    <div>
      <h2>Add Order</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Order ID:
          <input
            type="text"
            name="OrderID"
            value={formData.OrderID}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Customer Name:
          <input
            type="text"
            name="CustomerName"
            value={formData.CustomerName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product:
          <input
            type="text"
            name="Product"
            value={formData.Product}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="number"
            name="Quantity"
            value={formData.Quantity}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Order Date:
          <input
            type="date"
            name="OrderDate"
            value={formData.OrderDate}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add Order</button>
      </form>
    </div>
  );
}

export default AddOrder;
