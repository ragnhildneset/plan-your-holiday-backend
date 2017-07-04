// Load required packages
var mongoose = require('mongoose');

// Define our Schedule schema
var ScheduleSchema   = new mongoose.Schema({
    userid: String,
    arrival: Date,
    departure: Date,
    travel: 
  [
      {
          attractionId: String,
          startTime: Date,
          endTime: Date
      }

  ]
});

// Export the Mongoose model
module.exports = mongoose.model('Schedule', ScheduleSchema);





  
  