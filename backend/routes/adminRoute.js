const express = require('express');
const Admin = require('../models/adminModel');

const router = express.Router();

// Get all admins
router.get('/', async (req, res) => {
  try {
    const users = await Admin.findAll(); 
    res.json(users);
  } catch (err) {
    console.error('Error fetching admins:', err);
    res.status(500).json({ error: 'Failed to fetch admins' });
  }
});
// Get admin by email
router.get('/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const admin = await Admin.findOne({ where: { email } });
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }
    res.json(admin);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch admin' });
  }
});

module.exports = router;