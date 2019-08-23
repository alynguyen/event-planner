const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  events: [{
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }],
  comments: String
}, {
  timestamps: true
});

// module.exports = mongoose.model('User', userSchema);

const User = mongoose.model('User', userSchema);

module.exports = User;