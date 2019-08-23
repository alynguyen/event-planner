const Event = require('../models/event');

module.exports = {
  index,
  newEvent,
  create
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
    user: req.user
  });
}

function index(req, res) {
  res.render('events/index', {
    title: 'Events List',
    user: req.user
  });
}