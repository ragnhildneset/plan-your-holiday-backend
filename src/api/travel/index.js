module.exports = travelRoutes;

function travelRoutes(passport)
{

    var travelController = require('./travel.controller');
    var router = require('express').Router();

    //http://localhost:9000/api/user/login
   /* router.post('/login',function(req,res)
    {
        res.send("Here at loging get");
    });*/

   //http://localhost:9000/api/user/singup
    //router.post('/unregister', passport.authenticate('jwt', {session: false}),userController.unregister)

    return router;

}
