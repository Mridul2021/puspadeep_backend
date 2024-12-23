const mongoose = require('mongoose');

const ourFamilySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    maxlength: 100,
  },
  data: [
    {
      name: { type: String, required: true, maxlength: 100 },
      email: { type: String, required: true, maxlength: 100 },
      photo: { type: String, required: true },
    },
  ],
}, { timestamps: true });

const OurFamily = mongoose.model('OurFamily', ourFamilySchema);
module.exports = OurFamily;
