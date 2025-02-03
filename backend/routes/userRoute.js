const express = require('express');
const User = require('../models/userModel');

const router = express.Router();

// Generate a customer ID
function generateCustomerId() {
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  return `C${randomNum}`;
}

// Fetch all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll(); 
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Signup route for user registration
router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    const customer_id = generateCustomerId();
    const newUser = await User.create({ customer_id, email, password });
    res.json({ message: 'User created successfully', user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login route for user login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email, password } });
    if (user) {
      res.json({
        message: 'Login successful',
        customer_id: user.customer_id,
        email: user.email,
      });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Remove a user by customer_id
router.delete('/:customer_id', async (req, res) => {
  const { customer_id } = req.params;
  try {
    const user = await User.findOne({ where: { customer_id } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.destroy();
    res.json({ message: `User with customer_id ${customer_id} deleted successfully.`, user });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

// Route to update password
router.put('/update-password', async (req, res) => {
  try {
    const { customer_id, currentPassword, newPassword } = req.body;
    // Find user by customer_id
    const user = await User.findOne({ where: { customer_id } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Check if current password matches
    if (user.password !== currentPassword) {
      return res.status(401).json({ error: 'Current password is incorrect' });
    }
    // Update the password
    user.password = newPassword;
    await user.save();
    res.json({ message: 'Password updated successfully' });
  } catch (err) {
    console.error('Error updating password:', err);
    res.status(500).json({ error: 'Failed to update password' });
  }
});

module.exports = router;