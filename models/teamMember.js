const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100
  },
  position: {
    type: String,
    required: true,
    maxlength: 100
  },
  imageURL: {
    type: String,
    required: true
  }
});

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

module.exports = TeamMember;
