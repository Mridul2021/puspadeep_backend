const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    maxlength: 500
  }
});

const About = mongoose.model('About', aboutSchema);
module.exports = About;
