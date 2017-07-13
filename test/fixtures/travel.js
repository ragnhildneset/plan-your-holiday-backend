import { Types } from 'mongoose';

export default {
  model: 'Travel',
  data: [
    {
      user: Types.ObjectId('56aa0dc353c8040f4bb54637'),
      arrival: new Date('<2017-09-22T02:14:00>'),
      departure: new Date('<2017-09-26T02:14:00>'),
      isRated: false,
      schedule: [
        {
          attractionId: String,
          startTime: '',
          endTime: '',
          booking: String
        }
      ]
    }]
};
