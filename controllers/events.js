const Event = require('../models/event');
const User = require('../models/user');

module.exports = {
  index,
  newEvent,
  create,
  show
}

function show(req, res) {
  Event.findById(req.params.id, function (err, event) {
    res.render('events/show', {title: 'Event Details', event, user: req.user})
  });
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  let event = new Event(req.body);
  event.save(function(err) {
    if (err) return res.render('events/new');
    res.redirect('/events');
  })
}

function newEvent(req, res) {
  res.render('events/new', {
    title: 'New Event',
    user: req.user,
  });
  console.log(user, user.name)
}

// function index(req, res) {
//   Event.find({}, function (err, evts) {
//     User.find({}, function (err, users) {
//       console.log(users);
//       res.render('events/index', {
//         title: 'Events List',
//         user: req.user,
//         evts,
//         users
//       });
//     })
//   });
// }

function index(req, res, next) {
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

// function index(req, res, next) {
//   Event.find({}).populate('user')
//   .then(function(evts) {
//     User.find({}, function(users) {
//       console.log(evts);
//       res.render('events/index', {
//         title: 'Events List',
//         user: req.user,
//         evts,
//         users
//       })
//     })
//   })
// }