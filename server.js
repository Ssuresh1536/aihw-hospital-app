const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fetchAndStoreData = require('./utils/fetchAndStoreData');
const hospitalRoutes = require('./routes/hospitalRoutes');

// ✅ Load environment variables from .env file
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// ✅ Use MONGO_URI from .env file
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ MongoDB connected");
  fetchAndStoreData();
}).catch((err) => {
  console.error("❌ MongoDB connection error:", err.message);
});

app.use('/api/hospitals', hospitalRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
