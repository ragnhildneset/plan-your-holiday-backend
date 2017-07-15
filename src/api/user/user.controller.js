import User from './user.model';

import Config from '../../config';

const jwt = require('jwt-simple');


/* SB: Creates a function to call for login*/
module.exports.login = function (req, res) {
  if (!req.body.loginid) {
    res.status(400).send('User name required');
    return;
  }
  if (!req.body.password) {
    res.status(400).send('Password required');
    return;
  }

   User.findOne({loginid: req.body.loginid},function(err, user)
   {
       if (err)
       {
            res.status(500).send(err);
            return;
        }

        if (!user)
        {
            res.status(401).send('Invalid Credentials');
            return;
        }

        user.comparePassword(req.body.password, function(err, isMatch)
        {
            if(!isMatch || err)
            {
                res.status(401).send('Invalid Credentials');
            } else
            {
                //res.status(200).json({token: createToken(user)});
                res.status(200).json({token: createToken(user)});


            }

        });

   });
}

function createToken(user) {
  const tokenPayload = {
      user: {
          _id: user._id,
          loginid: user.loginid
      }

  };
  return jwt.encode(tokenPayload, Config.secret);
}

/*SB: Function to create an User*/
module.exports.singup = function (req,res)
{

    if(!req.body.loginid)
    {
        res.status(400).send('Login id is required');
        return;
    }
    if(!req.body.password)
    {
        res.status(400).send('Password required');
        return;
    }
    //name, email, loginid, password, birthdate, density

    var user = new User();
    user.username = req.body.username;
    user.email = req.body.email;
    user.loginid = req.body.loginid;
    user.password = req.body.password;    
    user.birthday = req.body.birthday;
    user.density = req.body.density;
    user.currency = req.body.currency;

    user.save(function(err) {
      if (err) {
          res.status(500).send(err);
          return;
      }
      res.status(200).json({ token: createToken(user) });
    });
};

/*TODO: module.exports.unregister && unction createToken(user) */
