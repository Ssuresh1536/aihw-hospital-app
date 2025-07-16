// models/pharmacy.js
const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema({
  PharmacyName: String,
  Address1: String,
  Suburb: String,
  Phone: String,
  Fax: String,
  ContactEmail: String,
  Treatment: String,
  OpeningHours: String,
  State: String,
  Postcode: String,
  ContactPerson: String,
  PreferredContactMethod: String,
  Notes: String,
  OST: [String]
});

module.exports = mongoose.model('Pharmacy', pharmacySchema);
