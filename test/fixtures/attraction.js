import { Types } from 'mongoose';

export default {
  model: 'Attraction',
  data: [
    {
      _id: Types.ObjectId('56aa0db353c8040f4cc54637'),
      title: 'Eisbach Surfers',
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      address: 'Mockstrasse 5',
      duration: 120,
      coordinates: {
        longitude: 10000,
        latitude: 20000
      },
      rating: {
        quality: {
          rating: 4.7,
          amount: 3000
        },
        popularity: {
          rating: 4.3,
          amount: 3000
        }
      }
    },
    {
      _id: Types.ObjectId('56aa0db353c8040f4cc54537'),
      title: 'Marienplatz',
      city: Types.ObjectId('56aa0db353c8040f4cc55647'),
      address: 'Mockstrasse 7',
      duration: 20,
      coordinates: {
        longitude: 10000,
        latitude: 20000
      },
      rating: {
        quality: {
          rating: 4.2,
          amount: 3000
        },
        popularity: {
          rating: 4.8,
          amount: 3000
        }
      }
    }
  ]
};
