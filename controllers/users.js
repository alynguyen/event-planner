const Event = require('../models/event');
const User = require('../models/user');

module.exports = {
  profile
}

function profile(req, res, next) {
  Event.find({}).populate('user')
  .then(function(evts) {
    console.log(evts);
    res.render('events/index', {
      title: 'Events List',
      user: req.user,
      evts,
    })
  })
}