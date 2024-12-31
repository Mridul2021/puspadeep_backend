const express = require('express');
const router = express.Router();
const awardsController = require('../controllers/awardsController');

router.post('/awards', awardsController.createAward);
router.get('/awards', awardsController.getAllAwards);
router.get('/awards/:id', awardsController.getAwardById);
router.put('/awards/:id', awardsController.updateAwardById);
router.delete('/awards/:id', awardsController.deleteAwardById);

module.exports = router;
