// module.exports = router;
const express = require('express');
const router = express.Router();
const Hospital = require('../models/Hospital');

// GET all hospitals
router.get('/', async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching hospitals' });
  }
});

// GET hospital by code
router.get('/:code', async (req, res) => {
  try {
    const hospital = await Hospital.findOne({ code: req.params.code });
    if (!hospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }
    res.json(hospital);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching hospital' });
  }
});

// POST new hospital with validation
router.post('/', async (req, res) => {
  try {
    const { code, name, values } = req.body;

    if (!code || !name || !values) {
      return res.status(400).json({ message: 'Missing required fields: code, name, or values' });
    }

    const requiredKeys = ['41', '42', '43'];
    for (let key of requiredKeys) {
      if (!(key in values)) {
        return res.status(400).json({ message: `Missing value for key ${key}` });
      }
      if (typeof values[key] !== 'number' || isNaN(values[key])) {
        return res.status(400).json({ message: `Value for key ${key} must be a number` });
      }
    }

    const exists = await Hospital.findOne({ code });
    if (exists) {
      return res.status(400).json({ message: 'Hospital with this code already exists' });
    }

    const newHospital = new Hospital({ code, name, values });
    const saved = await newHospital.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Error saving hospital' });
  }
});

// PATCH hospital by code: update name, values, or code
router.patch('/:code', async (req, res) => {
  try {
    const currentCode = req.params.code;
    const { code: newCode, name, values } = req.body;

    const hospital = await Hospital.findOne({ code: currentCode });
    if (!hospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }

    // Optional code change (if newCode is different)
    if (newCode && newCode !== currentCode) {
      const exists = await Hospital.findOne({ code: newCode });
      if (exists) {
        return res.status(400).json({ message: 'New hospital code already exists' });
      }
      hospital.code = newCode;
    }

    // Optional name update
    if (name) hospital.name = name;

    // Optional values update
    if (values) {
      const validKeys = ['41', '42', '43'];
      for (let key of validKeys) {
        const numKey = Number(key);
        if (values.hasOwnProperty(key) || values.hasOwnProperty(numKey)) {
          const val = values[key] ?? values[numKey];
          if (typeof val !== 'number' || isNaN(val)) {
            return res.status(400).json({ message: `Value for key ${key} must be a number` });
          }
          hospital.values[key] = val;
        }
      }
    }

    await hospital.save();
    res.json(hospital);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating hospital' });
  }
});

// DELETE hospital by code
router.delete('/:code', async (req, res) => {
  try {
    const deleted = await Hospital.findOneAndDelete({ code: req.params.code });
    if (!deleted) {
      return res.status(404).json({ message: 'Hospital not found' });
    }
    res.json({ message: 'Hospital deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting hospital' });
  }
});

module.exports = router;
