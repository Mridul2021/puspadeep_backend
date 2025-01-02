const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
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
  callbackTime: {
    type: String,
    required: true,
    maxlength: 100
  },
  enquiryDetails: {
    type: String,
    required: true,
    maxlength: 200
  }
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);

module.exports = Enquiry;
