const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  comment: String
}, {
  timestamps: true
})

const eventsSchema = new Schema({
  title: String,
  date: Date,
  category: String,
  details: String,
  destination: String,
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [commentsSchema]
}, {
  timestamps: true
});


const Event = mongoose.model('Event', eventsSchema);

module.exports = Event
