const express = require('express');
const router = express.Router();
const ongoingProjectsController = require('../controllers/ongoingProjectsController');

router.post('/ongoingProjects', ongoingProjectsController.createOngoingProjects);
router.get('/ongoingProjects', ongoingProjectsController.getAllOngoingProjects);
router.get('/ongoingProjects/:id', ongoingProjectsController.getOngoingProjectsById);
router.put('/ongoingProjects/:id', ongoingProjectsController.updateOngoingProjectsById);
router.delete('/ongoingProjects/:id', ongoingProjectsController.deleteOngoingProjectsById);

module.exports = router;
