// Load required packages
const mongoose = require('mongoose');

// Define our Schedule schema
var TravelSchema   = new mongoose.Schema({
    username: String,
    destination: String,
    arrival: Date,
    departure: Date,
    schedule:
  [
      {
          attractionId: String,
          attractionname: String,
          startTime: String,
          endTime: String,
          url: String
      }

  ]
});

// Export the Mongoose model
module.exports = mongoose.model('Travel', TravelSchema);
