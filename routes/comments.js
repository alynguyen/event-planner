var express = require('express');
var router = express.Router();
var commentsCtrl = require('../controllers/comments');

router.post('/events/:id/comments', commentsCtrl.create);

module.exports = router;