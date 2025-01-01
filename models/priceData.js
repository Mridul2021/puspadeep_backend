const mongoose = require('mongoose');

const priceDataSchema = new mongoose.Schema(
  {
    Royale_Paint: { type: Number, required: true },
    Premium_Emulsion_Paint: { type: Number, required: true },
    Tractor_Emulsion_Paint: { type: Number, required: true },
    Exterior_Apex_Ultima_Paint: { type: Number, required: true },
    Exterior_Apex_Paint: { type: Number, required: true },
    Exterior_Putty: { type: Number, required: true },
    Interior_Putty: { type: Number, required: true },
    Lumiflakes_Coarse_Texture: { type: Number, required: true },
    Ganiza_Coarse_Texture: { type: Number, required: true },
    Dhulpur_Texture: { type: Number, required: true },
    Floor_Tile: { type: Number, required: true },
    Wall_Tile: { type: Number, required: true },
    Waterproofing_APP_Membrane: { type: Number, required: true },
    Waterproofing_Smart_Care_Damp_Proof_Ultra: { type: Number, required: true },
  },
  { timestamps: true }
);

const PriceData = mongoose.model('PriceData', priceDataSchema);
module.exports = PriceData;
