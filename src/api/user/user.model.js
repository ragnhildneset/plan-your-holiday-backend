import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

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
    type: Date
  },
  attraction: {
    type: String
  }
});
  /* eslint-disable func-names */
UserSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  /* eslint-disable func-names */
  /* eslint-disable prefer-arrow-callback */
  /* eslint-disable no-shadow */

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

export default mongoose.model('User', UserSchema);
