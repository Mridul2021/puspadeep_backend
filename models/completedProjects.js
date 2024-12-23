const mongoose = require('mongoose');

const completedProjectsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  location: {
    type: String,
    required: true,
    maxlength: 100,
  },
  projectDescription: {
    type: String,
    required: true,
    maxlength: 500,
  },
  picBefore: {
    type: String,
    required: true,
  },
  picAfter: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
    maxlength: 1000,
  },
}, { timestamps: true });

const CompletedProjects = mongoose.model('CompletedProjects', completedProjectsSchema);
module.exports = CompletedProjects;
