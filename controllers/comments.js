var Event = require('../models/event');

module.exports = {
  create
};

function create(req, res) {
  Event.findById(req.params.id, function(err, event) {
    event.comments.push(req.body);
    event.save(function(err) {
      console.log(req.body);
      res.redirect(`/events/${event._id}`);
    });
  });
}