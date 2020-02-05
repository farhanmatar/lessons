const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  resetPasswordToken: {
    type: String,
    default: true
  },
  resetPasswordExpires: {
    type: Date,
    default: true
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;