const mongoose = require('mongoose');

const completedProjectsSchema = new mongoose.Schema(
  {
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
    pic: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const CompletedProjects = mongoose.model('CompletedProjects', completedProjectsSchema);
module.exports = CompletedProjects;
