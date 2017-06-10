/* eslint-disable indent */
/**
 * Created by duyguakdemir on 07.06.17.
 */
import mongoose from 'mongoose';

// eslint-disable-next-line indent
const CitySchema = new mongoose.Schema({
    name: {
    type: String,
    require: true
    },
    city: {
        type: mongoose.Schema.Types.ObjectId
    },
    description: {
        type: String
    }
});

export default mongoose.model('City', CitySchema);

