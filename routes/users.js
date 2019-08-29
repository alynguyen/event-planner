var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');

/* GET users listing. */
router.get('/profile', userCtrl.profile);
router.delete('/:id', userCtrl.deleteOne);

module.exports = router;
