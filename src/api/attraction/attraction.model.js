import mongoose from 'mongoose';

const AttractionSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  url: String,
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
  },
  filename: {
    type: String }
});

AttractionSchema.statics = {
  load: function(id, cb){
    this.findOne({_id: id}).exec(cb);
  }
};


export default mongoose.model('Attraction', AttractionSchema);
