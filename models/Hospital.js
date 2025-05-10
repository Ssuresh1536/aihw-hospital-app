const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  code: String,
  name: String,
  values: {
    41: Number,
    42: Number,
    43: Number
  }
});

module.exports = mongoose.model('Hospital', hospitalSchema);