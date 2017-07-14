// Load required packages
const mongoose = require('mongoose');

// Define our Schedule schema
const TravelSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, require: true, unique: true },
  city: mongoose.Schema.Types.ObjectId,
  cityName: String,
  arrival: Date,
  departure: Date,
  isRated: Boolean,
  schedule: [
    {
      attractionId: mongoose.Schema.Types.ObjectId,
      attractionName: String,
      startTime: String,
      endTime: String,
      booking: String
    }
  ]
});

// Export the Mongoose model
module.exports = mongoose.model('Travel', TravelSchema);
