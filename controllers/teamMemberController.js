const TeamMember = require('../models/teamMember');

exports.createTeamMember = async (req, res) => {
  try {
    const newTeamMember = new TeamMember(req.body);
    const savedTeamMember = await newTeamMember.save();
    res.status(201).json(savedTeamMember);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllTeamMembers = async (req, res) => {
  try {
    const teamMembers = await TeamMember.find();
    res.status(200).json(teamMembers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTeamMemberById = async (req, res) => {
  try {
    const teamMember = await TeamMember.findById(req.params.id);
    if (!teamMember) return res.status(404).json({ message: 'Team member not found' });
    res.status(200).json(teamMember);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTeamMemberById = async (req, res) => {
  try {
    const updatedTeamMember = await TeamMember.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updatedTeamMember) return res.status(404).json({ message: 'Team member not found' });
    res.status(200).json(updatedTeamMember);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTeamMemberById = async (req, res) => {
  try {
    const deletedTeamMember = await TeamMember.findByIdAndDelete(req.params.id);
    if (!deletedTeamMember) return res.status(404).json({ message: 'Team member not found' });
    res.status(200).json({ message: 'Team member deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
