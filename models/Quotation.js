const mongoose = require('mongoose');

const quotationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50
  },
  mobileNumber: {
    type: String,
    required: true,
    maxlength: 20
  },
  email: {
    type: String,
    required: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  },
  workType: {
    type: String,
    required: true,
    maxlength: 150
  },
  location: {
    type: String,
    required: true,
    maxlength: 150
  },
  inspectionConsent: {
    type: String,
    required: true,
    enum: ['Yes', 'No']
  },
  contactTime: {
    type: String,
    required: true,
    maxlength: 100
  },
  requirements: {
    type: String,
    required: true,
    maxlength: 200
  }
});

const Quotation = mongoose.model('Quotation', quotationSchema);

module.exports = Quotation;
