const OurFamily = require('../models/ourFamily');

exports.addFamilyMember = async (req, res) => {
  const { title } = req.params;
  const newMember = req.body;

  try {
    const family = await OurFamily.findOneAndUpdate(
      { title },
      { $push: { data: newMember } },
      { new: true, upsert: true }
    );
    res.status(200).json(family);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteFamilyMember = async (req, res) => {
  const { title } = req.params;
  const { email } = req.body;

  try {
    const family = await OurFamily.findOneAndUpdate(
      { title },
      { $pull: { data: { email } } },
      { new: true }
    );

    if (!family) return res.status(404).json({ message: 'Title not found' });
    res.status(200).json(family);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllFamily = async (req, res) => {
  try {
    const family = await OurFamily.find();
    res.status(200).json(family);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFamilyByTitle = async (req, res) => {
  const { title } = req.params;

  try {
    const family = await OurFamily.findOne({ title });
    if (!family) return res.status(404).json({ message: 'Title not found' });
    res.status(200).json(family);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};