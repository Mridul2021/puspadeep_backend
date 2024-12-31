const express = require('express');
const router = express.Router();
const teamMemberController = require('../controllers/teamMemberController');

router.post('/teamMembers', teamMemberController.createTeamMember);
router.get('/teamMembers', teamMemberController.getAllTeamMembers);
router.get('/teamMembers/:id', teamMemberController.getTeamMemberById);
router.put('/teamMembers/:id', teamMemberController.updateTeamMemberById);
router.delete('/teamMembers/:id', teamMemberController.deleteTeamMemberById);

module.exports = router;
