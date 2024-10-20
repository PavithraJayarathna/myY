const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');


router.post('/addStaff', staffController.addStaff);


module.exports = router;
