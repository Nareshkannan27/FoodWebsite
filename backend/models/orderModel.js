// orderModel.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  OrderID: { type: String, unique: true, required: true },
  CustomerName: { type: String, required: true },
  Product: { type: String, required: true },
  Quantity: { type: Number, required: true },
  OrderDate: { type: Date, required: true }
});

module.exports = mongoose.model('Order', orderSchema);
