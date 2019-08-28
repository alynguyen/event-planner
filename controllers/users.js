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

// Event.findById(req.params.id, function (err, event) {
//   User.findById(event.user, function (err, username) {
//     res.render('events/edit', {title: 'Edit Event', event, user: req.user, username})
//   })
// });
// }