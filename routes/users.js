var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');

/* GET users listing. */
router.get('/profile', userCtrl.profile); 

module.exports = router;
