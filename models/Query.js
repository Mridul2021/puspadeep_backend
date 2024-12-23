const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50
  },
  phno: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/
  },
  email: {
    type: String,
    required: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  },
  location: {
    type: String,
    required: true,
    maxlength: 100
  },
  work_description: {
    type: String,
    required: true,
    maxlength: 500 
  },
  free_time: {
    type: String,
    required: true,
    maxlength: 50
  }
});

const Query = mongoose.model('Query', querySchema);

module.exports = Query;
