const express = require('express');
const router = express.Router();
const quotationController = require('../controllers/quotationController');

router.post('/quotations/send-email', quotationController.sendQuotationEmail);

module.exports = router;
