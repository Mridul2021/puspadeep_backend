const mongoose = require('mongoose');

const ongoingProjectsSchema = new mongoose.Schema(
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

const OngoingProjects = mongoose.model('OngoingProjects', ongoingProjectsSchema);
module.exports = OngoingProjects;
