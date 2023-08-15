const express = require('express');
const router = express.Router();
const getUserController = require('../controllers/userController');

router.get('/user', getUserController);

module.exports = router;