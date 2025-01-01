const express = require('express');
const router = express.Router();
const priceDataController = require('../controllers/priceDataController');

router.get('/prices', priceDataController.getAllPrices);
router.post('/prices', priceDataController.createPriceData);
router.put('/prices', priceDataController.updatePriceData);
router.delete('/prices', priceDataController.deletePriceData);

module.exports = router;
