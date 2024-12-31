const Award = require('../models/awards');

// Create a new award
exports.createAward = async (req, res) => {
  try {
    const { title, description, year, imageURL } = req.body;

    const newAward = new Award({ title, description, year, imageURL });
    const savedAward = await newAward.save();

    res.status(201).json(savedAward);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all awards
exports.getAllAwards = async (req, res) => {
  try {
    const awards = await Award.find();
    res.status(200).json(awards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get award by ID
exports.getAwardById = async (req, res) => {
  try {
    const award = await Award.findById(req.params.id);
    if (!award) return res.status(404).json({ message: 'Award not found' });

    res.status(200).json(award);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update award by ID
exports.updateAwardById = async (req, res) => {
  try {
    const updatedAward = await Award.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedAward) return res.status(404).json({ message: 'Award not found' });

    res.status(200).json(updatedAward);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete award by ID
exports.deleteAwardById = async (req, res) => {
  try {
    const deletedAward = await Award.findByIdAndDelete(req.params.id);
    if (!deletedAward) return res.status(404).json({ message: 'Award not found' });

    res.status(200).json({ message: 'Award deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
