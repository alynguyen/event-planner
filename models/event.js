const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  title: String,
  time: Date,
  category: String,
  details: String,
  destination: String,
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  //comments
}, {
  timestamps: true
});

const Event = mongoose.model('Event', eventsSchema);

module.exports = Event;
