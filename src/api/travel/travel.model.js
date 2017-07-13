// Load required packages
var mongoose = require('mongoose');

// Define our Schedule schema
var TravelSchema   = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId,  require: true, unique: true},
    arrival: Date,
    departure: Date,
    isRated: Boolean,
    schedule:
  [
      {
          attractionId: String,
          startTime: String,
          endTime: String,
          booking: String
      }
  ]
});

// Export the Mongoose model
module.exports = mongoose.model('Travel', TravelSchema);
