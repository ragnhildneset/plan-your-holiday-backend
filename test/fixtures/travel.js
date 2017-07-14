import { Types } from 'mongoose';

export default {
  model: 'Travel',
  data: [
    {
      _id: Types.ObjectId("595bd645cd87f32898fe4313"),
      user: Types.ObjectId('56aa0dc353c8040f4bb54637'),
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      arrival: Date("2017-12-10T00:00:00.000Z"),
      isRated: false,
      departure: Date("2017-12-10T00:00:00.000Z"),
      schedule: [
        {
          attractionId: Types.ObjectId('56aa0db353c8040f4cc54650'),
          attractionName: "Botanic Garden",
          startTime: "2017-12-10 08:00",
          endTime: "2017-12-10 10:00",
          booking: "http://www.olympiapark.de/de/olympiapark-muenchen/"
      },
      {
          attractionId: Types.ObjectId('56aa0db353c8040f4cc54648'),
          attractionName: "Olympiapark",
          startTime: "2017-12-10 10:30",
          endTime: "2017-12-10 11:30",
          booking: "http://www.neuschwanstein.de/"
      }]
    }
  ]
};
