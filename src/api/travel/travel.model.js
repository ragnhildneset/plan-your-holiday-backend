// Load required packages
var mongoose = require('mongoose');

// Define our Schedule schema
var TravelSchema   = new mongoose.Schema({
    userid: String,
    arrival: Date,
    departure: Date,
    schedule: 
  [
      {
          attractionId: String,
          startTime: Date,
          endTime: Date
      }

  ]
});

// Export the Mongoose model
module.exports = mongoose.model('Travel', TravelSchema);
