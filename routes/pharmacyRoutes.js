const express = require('express');
const router = express.Router();
const Pharmacy = require('../models/Pharmacy'); // Case-sensitive!

// GET all pharmacies
router.get('/', async (req, res) => {
  try {
    const pharmacies = await Pharmacy.find({});
    res.json(pharmacies);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
