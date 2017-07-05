import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  loginid: {
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
  density: {
    type: Number
  },
  attraction: {
    type: String
  }
});

/* SB: Function runs before to the SAVE event, and encrypts the password*/
userSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


export default mongoose.model('User', userSchema);
