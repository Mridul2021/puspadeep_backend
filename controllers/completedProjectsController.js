const CompletedProjects = require('../models/completedProjects');

exports.createCompletedProjects = async (req, res) => {
  try {
    const { name, location, projectDescription, pic } = req.body;

    if (!Array.isArray(pic)) {
      return res.status(400).json({ error: 'pic must be an array' });
    }

    const newProject = new CompletedProjects({ name, location, projectDescription, pic });
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllCompletedProjects = async (req, res) => {
  try {
    const projects = await CompletedProjects.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCompletedProjectsById = async (req, res) => {
  try {
    const project = await CompletedProjects.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCompletedProjectsById = async (req, res) => {
  try {
    const { pic } = req.body;

    if (pic && !Array.isArray(pic)) {
      return res.status(400).json({ error: 'pic must be an array' });
    }

    const updatedProject = await CompletedProjects.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProject) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCompletedProjectsById = async (req, res) => {
  try {
    const deletedProject = await CompletedProjects.findByIdAndDelete(req.params.id);
    if (!deletedProject) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
