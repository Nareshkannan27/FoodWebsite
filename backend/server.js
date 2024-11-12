// server.js
const express = require('express');
const mongoose = require('mongoose');
const Order = require('./models/orderModel');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

// Connect to MongoDB
// Correct MongoDB connection string
mongoose.connect('mongodb://localhost:27017/Orders', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Connection error:', error));


// Add Order
app.post('/api/orders', async (req, res) => {
    const { OrderID, CustomerName, Product, Quantity, OrderDate } = req.body;
  
    try {
      const newOrder = new Order({
        OrderID,
        CustomerName,
        Product,
        Quantity,
        OrderDate
      });
  
      const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);  // Return the saved order with a 201 status
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ message: 'Error creating order' });
  });

// In your backend, define the PATCH route to update an order
app.patch('/api/orders/:orderID', async (req, res) => {
    try {
      const { orderID } = req.params;  // Get the orderID from the URL
      const updateData = req.body;     // Get the updated data from the request body
  
      const updatedOrder = await Order.findOneAndUpdate({ OrderID: orderID }, updateData, { new: true });
  
      if (!updatedOrder) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      res.status(200).json(updatedOrder);  // Send the updated order as a response
    } catch (error) {
      console.error('Error updating order:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

// Delete Order
app.delete('/api/orders/:id', async (req, res) => {
  try {
    const order = await Order.findOneAndDelete({ OrderID: req.params.id });
    if (!order) return res.status(404).send({ message: 'Order not found' });
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/api/orders/:id', async (req, res) => {
    const orderId = req.params.id;
    try {
      const order = await Order.findOne({ OrderID: orderId });
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching order', error });
    }
  });

  // In your backend, add this route to fetch all orders
  // server.js (Backend)


app.listen(5000, () => console.log('Server running on port 5000'));
