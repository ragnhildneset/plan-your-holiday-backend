import mongoose from 'mongoose';

const ScheduleSchema = new mongoose.Schema({

 TravelId: String,
  TravelName: String,
  days: 
  [
      {
          dayName: String,
          dayDate: Date,
          Attractions: 
          [
              {
                  AttractionName: String,
                  AttractionStartTime: Date,
                  AttractionEndTime: Date,
                  AttractionDuration: Number
              }

          ]
      }

  ]
});

export default mongoose.model('Attraction', AttractionSchema);