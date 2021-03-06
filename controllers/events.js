const Event = require('../models/event');
const User = require('../models/user');
const moment = require('moment');

module.exports = {
  index,
  newEvent,
  create,
  show,
  edit,
  update,
  deleteOne
}

function deleteOne(req, res, next) {
  Event.findOneAndDelete({_id: req.params.id}).exec( function (err) {
    res.redirect('/events');
  });
}

function update(req, res, next) {
  Event.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
    next()
  })
}

function edit(req, res) {
  Event.findById(req.params.id, function (err, event) {
    User.findById(event.user, function (err, username) {
      res.render('events/edit', {
        title: 'Edit Event', 
        event, 
        user: req.user, 
        username
      })
    })
  })
}

function show(req, res) {
  Event.findById(req.params.id, function (err, event) {
    User.findById(event.user, function (err, username) {
      res.render('events/show', {
        title: 'Event Details', 
        event, 
        user: req.user,
        username,
        moment: moment
      })
    })
  })
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
}

function index(req, res, next) {
  let sortKey = req.query.sort || 'date';
  Event.find({}).sort(sortKey)
  .then(function(evts) {
    res.render('events/index', {
      title: 'Events List',
      user: req.user,
      evts,
      moment: moment,
      sortKey
    })
  })
}
