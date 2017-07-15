// Load required packages
var mongoose = require('mongoose');

// Define our Schedule schema
var TravelSchema   = new mongoose.Schema({
    username: String,
    arrival: Date,
    departure: Date,
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
