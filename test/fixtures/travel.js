import { Types } from 'mongoose';

export default {
  model: 'Travel',
  data: [
    {
      _id: Types.ObjectId("595bd645cd87f32898fe4313"),
      username: "rags",
      destination: "München",
      arrival: Date("2017-12-10T00:00:00.000Z"),
      departure: Date("2017-12-10T00:00:00.000Z"),
      schedule: [
        {
          attractionId: Types.ObjectId('56aa0db353c8040f4cc54650'),
          attractionname: "Botanic Garden",
          startTime: "2017-12-10 08:00",
          endTime: "2017-12-10 10:00",
          url: "http://www.olympiapark.de/de/olympiapark-muenchen/"
      },
      {
          attractionId: Types.ObjectId('56aa0db353c8040f4cc54648'),
          attractionname: "Olympiapark",
          startTime: "2017-12-10 10:30",
          endTime: "2017-12-10 11:30",
          url: "http://www.neuschwanstein.de/"
      }]
    }
  ]
};
