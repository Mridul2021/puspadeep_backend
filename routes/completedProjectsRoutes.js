const express = require('express');
const router = express.Router();
const completedProjectsController = require('../controllers/completedProjectsController');

router.post('/completedProjects', completedProjectsController.createCompletedProjects);
router.get('/completedProjects', completedProjectsController.getAllCompletedProjects);
router.get('/completedProjects/:id', completedProjectsController.getCompletedProjectsById);
router.put('/completedProjects/:id', completedProjectsController.updateCompletedProjectsById);
router.delete('/completedProjects/:id', completedProjectsController.deleteCompletedProjectsById);

module.exports = router;
