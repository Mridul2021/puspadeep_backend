const OngoingProjects = require('../models/ongoingProjects');

exports.createOngoingProjects = async (req, res) => {
  try {
    const newProject = new OngoingProjects(req.body);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllOngoingProjects = async (req, res) => {
  try {
    const projects = await OngoingProjects.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOngoingProjectsById = async (req, res) => {
  try {
    const project = await OngoingProjects.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOngoingProjectsById = async (req, res) => {
  try {
    const updatedProject = await OngoingProjects.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedProject) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteOngoingProjectsById = async (req, res) => {
  try {
    const deletedProject = await OngoingProjects.findByIdAndDelete(req.params.id);
    if (!deletedProject) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
