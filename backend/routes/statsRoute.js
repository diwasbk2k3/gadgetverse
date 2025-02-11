const express = require('express');
const User = require('../models/userModel');
const Order = require('../models/orderModel');
const Product = require('../models/productModel');

const router = express.Router();

// Fetch statistics for the dashboard
router.get('/', async (req, res) => {
  try {
    // Get total number of users
    const totalUsers = await User.count();

    // Get total revenue (sum of all orders total_price)
    const totalRevenue = await Order.sum('total_price');

    // Get total number of orders
    const totalOrders = await Order.count();

    // Get total number of products
    const totalProducts = await Product.count();

    // Send the data to the client
    res.json({
      totalUsers,
      totalRevenue,
      totalOrders,
      totalProducts,
    });
  } catch (err) {
    console.error('Error fetching dashboard stats:', err);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

module.exports = router;