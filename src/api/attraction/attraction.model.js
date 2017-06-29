import mongoose from 'mongoose';

const AttractionSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  city: {
    type: mongoose.Schema.Types.ObjectId
  },
  address: {
    type: String
  },
  duration: {
    type: Number
  },
  category: {
    type: String
  },
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  rating: {
    quality: {
      rating: Number,
      amount: Number
    },
    popularity: {
      rating: Number,
      amount: Number
    }
  }
});

export default mongoose.model('Attraction', AttractionSchema);
