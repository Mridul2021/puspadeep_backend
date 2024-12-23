const express = require('express');
const router = express.Router();
const queryController = require('../controllers/queryController');

router.post('/queries/send-email', queryController.sendQueryEmail);

module.exports = router;
