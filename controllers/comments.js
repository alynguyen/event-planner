var Event = require('../models/event');

module.exports = {
  create
};

function create(req, res) {
  console.log('This rans shidd');
  Event.findById(req.params.id, function(err, event) {
    event.comments.push(req.body);
    event.save(function(err) {
      console.log(event._id);
      res.redirect(`/events/${event._id}`);
    });
  });
}