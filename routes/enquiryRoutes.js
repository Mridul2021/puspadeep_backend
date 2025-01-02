const express = require('express');
const router = express.Router();
const enquiryController = require('../controllers/enquiryController');

router.post('/enquiries/send-email', enquiryController.sendEnquiryEmail);

module.exports = router;
