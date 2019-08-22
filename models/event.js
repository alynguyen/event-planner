const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  title: String,
  date: Date,
  category: String,
  details: String,
  destination: String
  //comments
}, {
  timestamps: true
});

const Event = mongoose.model('Event', eventsSchema);

module.exports = Event;
