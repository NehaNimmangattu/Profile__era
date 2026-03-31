const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    match: [/^[a-zA-Z\s]+$/, 'Name can only contain alphabets and spaces']
  },
  contact: {
    type: String,
    required: [true, 'Contact number is required'],
    match: [/^\d{10}$/, 'Contact number must be exactly 10 digits']
  },
  linkedin: {
    type: String,
    match: [/^((https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?)?$/, 'Please enter a valid URL or leave it empty']
  },
  naukri: {
    type: String,
    match: [/^((https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?)?$/, 'Please enter a valid URL or leave it empty']
  },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', LeadSchema);
