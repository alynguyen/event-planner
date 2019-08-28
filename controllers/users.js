const Event = require('../models/event');
const User = require('../models/user');

module.exports = {
  profile
}

function profile(req, res, next) {
  User.findOne({name: req.user.name}, function (err, uname) {
    Event.find({user: uname}, function (err, events) {
      res.render('users/profile', {
        user: req.user,
        title: 'Profile',
        events,
        uname
      })
    })
  })  
}
