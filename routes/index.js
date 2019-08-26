var express = require('express');
var router = express.Router();
var passport = require('passport');
var indexCtrl = require('../controllers/index');


/* GET home page. */
router.get('/', indexCtrl.index);

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

 // Google OAuth callback route
 router.get('/oauth2callback', passport.authenticate(
  'google',
{
    successRedirect : '/events',
    failureRedirect : '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
