import mongoose from 'mongoose';

const AttractionSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  city: {
    type: String
  },
  address: {
    type: String
  }
});

export default mongoose.model('Attraction', AttractionSchema);
