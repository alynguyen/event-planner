const Event = require('../models/event');
const User = require('../models/user');

module.exports = {
  profile
}

function profile(req, res, next) {
  res.render('users/profile', {
    user: req.user,
    name: req.query.name,
    title: 'Profile'
  });
}