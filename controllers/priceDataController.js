const PriceData = require('../models/priceData');

// Get all price data
exports.getAllPrices = async (req, res) => {
  try {
    const prices = await PriceData.findOne(); // Assuming one document for all data
    res.status(200).json(prices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create price data
exports.createPriceData = async (req, res) => {
  try {
    const priceData = new PriceData(req.body);
    const savedPriceData = await priceData.save();
    res.status(201).json(savedPriceData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update price data
exports.updatePriceData = async (req, res) => {
  try {
    const updatedPriceData = await PriceData.findOneAndUpdate({}, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedPriceData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete all price data
exports.deletePriceData = async (req, res) => {
  try {
    await PriceData.deleteOne();
    res.status(200).json({ message: 'Price data deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
