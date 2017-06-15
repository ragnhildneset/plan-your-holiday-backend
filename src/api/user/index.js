module.exports = userRoutes;

function userRoutes(passport) 
{
     
    var userController = require('./user.controller');
    var router = require('express').Router();

    //http://localhost:9000/api/user/login
    router.get('/login',function(req,res)
    {
        res.send("Here at loging get");
    });
    router.post('/login', function(req, res){userController.login});
   
    router.post('/signup', userController.singup);
    //router.post('/unregister', passport.authenticate('jwt', {session: false}),userController.unregister)

    return router;

}  