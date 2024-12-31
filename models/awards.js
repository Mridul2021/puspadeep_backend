const mongoose = require('mongoose');

const awardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      maxlength: 500,
    },
    year: {
      type: String,
      required: true,
      maxlength: 4,
    },
    imageURL: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Award = mongoose.model('Award', awardSchema);
module.exports = Award;
