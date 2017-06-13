import jwt from 'jwt-simple';
import Config from '../src/config.js';
import User from './UserSchema';


/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */

module.exports.login = function (req, res) {
  if (!req.body.username) {
    res.status(400).send('username required');
    return;
  }
  if (!req.body.password) {
    res.status(400).send('password required');
    return;
  }
  User.findOne({ username: req.body.username }, function (err, user) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    if (!user) {
      res.status(401).send('Invalid Credentials');
      return;
    }
    user.comparePassword(req.body.password, function (err, isMatch) {
      if (!isMatch || err) {
        res.status(401).send('Invalid Credentials');
      } else {
        res.status(200).json({ token: createToken(user) });
      }
    });
  });
};


module.exports.signup = function (req, res) {
  if (!req.body.username) {
    res.status(400).send('username required');
    return;
  }
  if (!req.body.password) {
    res.status(400).send('password required');
    return;
  }

  const user = new User();

  user.username = req.body.username;
  user.password = req.body.password;

  user.save(function (err) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.status(201).json({ token: createToken(user) });
  });
};

module.exports.unregister = function (req, res) {
  req.user.remove().then(function (user) {
    res.sendStatus(200);
  }, function (err) {
    res.status(500).send(err);
  });
};

function createToken(user) {
  const tokenPayload = {
    user: {
      _id: user.id,
      username: user.username
    }

  };
  return jwt.encode(tokenPayload, Config.auth.jwtSecret);
}
