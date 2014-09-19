var mongoose = require('mongoose');

// User Schema
var uploadSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  url: String,
  title: String,
  description: String,
});


// Our user model
var Upload = mongoose.model('users', uploadSchema);

// Make user model available through exports/require
module.exports.Upload = Upload;