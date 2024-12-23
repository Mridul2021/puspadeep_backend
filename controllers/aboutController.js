const About = require('../models/About');

exports.createAbout = async (req, res) => {
  try {
    const newAbout = new About(req.body);
    const savedAbout = await newAbout.save();
    res.status(201).json(savedAbout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllAbouts = async (req, res) => {
  try {
    const abouts = await About.find();
    res.status(200).json(abouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAboutById = async (req, res) => {
  try {
    const about = await About.findById(req.params.id);
    if (!about) return res.status(404).json({ message: 'About not found' });
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAboutById = async (req, res) => {
  try {
    const updatedAbout = await About.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedAbout) return res.status(404).json({ message: 'About not found' });
    res.status(200).json(updatedAbout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteAboutById = async (req, res) => {
  try {
    const deletedAbout = await About.findByIdAndDelete(req.params.id);
    if (!deletedAbout) return res.status(404).json({ message: 'About not found' });
    res.status(200).json({ message: 'About deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
