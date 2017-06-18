import mongoose from 'mongoose';

var travelSchema = new mongoose.Schema({
  activity: {
    type: mongoose.Schema.Types.ObjectId
  },
  date: {
    type: Date
  },
  time: {
    hours: {
      type: Number
    },
    minutes: {
      type: Number
    }
  }
});

var travelSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  arrival: {
    type: Date
  },
  departure: {
    type: Date
  },
  schedule: {
    type: [activitySchema]
  }
});


var Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;
