module.exports = userRoutes;

function userRoutes(passport)
{

    var userController = require('./user.controller');
    var router = require('express').Router();

    //http://localhost:9000/api/user/login
   /* router.post('/login',function(req,res)
    {
        res.send("Here at loging get");
    });*/
    router.post('/login', userController.login);

    //http://localhost:9000/api/user/singup
    router.post('/signup', userController.singup);
    //router.post('/unregister', passport.authenticate('jwt', {session: false}),userController.unregister)

    // JF: return the preferences of a user with the given loginid
    router.get('/getPreferences/:loginid', userController.getPreferences);
    // JF: set the preferences of a user with the given loginid
    router.put('/setPreferences/:loginid', userController.setPreferences);
    // JF: delete a user with the given loginid
    router.delete('/:loginid', userController.deleteUser);


    return router;

}
