// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const pharmacyRoutes = require('./routes/pharmacyRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/pharmacies', pharmacyRoutes); 

app.use(express.static('public'));


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));
