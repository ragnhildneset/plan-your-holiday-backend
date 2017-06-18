var User = require ('./user.model');
var jwt = require('jwt-simple');


/* SB: Creates a function to call for login*/
module.exports.login = function (req,res)
{
    if(!req.body.username)
    {
        res.status(400).send('User name required');
        return;
    }
    if(!req.body.password)
    {
        res.status(400).send('Password required');
        return;
    }

   User.findOne({loginid: req.body.username},function(err, user)
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
                res.send("User found");
            }

        });

   });
}

/*SB: Function to create an User*/

module.exports.singup = function (req,res)
{
    
    if(!req.body.username)
    {
        res.status(400).send('username required');
        return;
    }
    if(!req.body.password)
    {
        res.status(400).send('password required');
        return;
    }
    
    var user = new User();
    user.username = req.body.username;
    user.loginid = req.body.loginid;
    user.password = req.body.password;
    user.email = req.body.email;
    user.birthday = req.body.birthday;
    user.density = req.body.density;

    user.save(function(err)
     {
        if (err) 
        {
            res.status(500).send(err);
            return;
        }
        else
        {
            res.send("User Created");
        }
     });
};

/*TODO: module.exports.unregister && unction createToken(user) */

function createToken(user) {
    var tokenPayload = {
        user: {
            _id: user._id,
            username: user.username
        }

    };
    return jwt.encode(tokenPayload,"Secrect");
    };