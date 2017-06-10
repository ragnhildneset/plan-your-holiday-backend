/**
 * Created by duyguakdemir on 10.06.17.
 */
import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

// eslint-disable-next-line indent
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  birthday: {
    type: Number
  }
  // attraction:
});
UserSchema.pre('save', function (next) {
  const user = this;

    // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

        // hash the password using our new salt
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);

            // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};


export default mongoose.model('User', UserSchema);
