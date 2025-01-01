const mongoose = require('mongoose');

const priceDataSchema = new mongoose.Schema(
  {
    "Royale Paint": { type: Number, required: true },
    "Premium Emulsion Paint": { type: Number, required: true },
    "Tractor Emulsion Paint": { type: Number, required: true },
    "Exterior Apex Ultima Paint": { type: Number, required: true },
    "Exterior Apex Paint": { type: Number, required: true },
    "Exterior Putty": { type: Number, required: true },
    "Interior Putty": { type: Number, required: true },
    "Lumiflakes Coarse Texture": { type: Number, required: true },
    "Ganiza Coarse Texture": { type: Number, required: true },
    "Dhulpur Texture": { type: Number, required: true },
    "Floor Tile": { type: Number, required: true },
    "Wall Tile": { type: Number, required: true },
    "Waterproofing APP Membrane": { type: Number, required: true },
    "Waterproofing Smart Care Damp Proof Ultra": { type: Number, required: true },
  },
  { timestamps: true }
);

const PriceData = mongoose.model('PriceData', priceDataSchema);
module.exports = PriceData;
