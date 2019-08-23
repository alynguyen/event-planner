var express = require('express');
var router = express.Router();
var passport = require('passport');
var indexCtrl = require('../controllers/index');


/* GET home page. */
router.get('/', indexCtrl);

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

 // Google OAuth callback route
 router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/students',
    failureRedirect : '/students'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/students');
});

module.exports = router;
