const express = require('express');
const router = express.Router();
const ourFamilyController = require('../controllers/ourFamilyController');

router.post('/ourFamily/:title/add', ourFamilyController.addFamilyMember);
router.put('/ourFamily/:title/delete', ourFamilyController.deleteFamilyMember);
router.get('/ourFamily', ourFamilyController.getAllFamily);
router.get('/ourFamily/:title', ourFamilyController.getFamilyByTitle);

module.exports = router;
    