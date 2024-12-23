const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

router.post('/about', aboutController.createAbout);
router.get('/about', aboutController.getAllAbouts);
router.get('/about/:id', aboutController.getAboutById);
router.put('/about/:id', aboutController.updateAboutById);
router.delete('/about/:id', aboutController.deleteAboutById);

module.exports = router;
