module.exports = scheduleRoutes;


function scheduleRoutes() {

    var scheduleController = require('./schedule.controller');
    var router = require('express').Router();
   
   //SB: Creating a travel 
    router.post('/postTravel', scheduleController.postTravel);
        //.get(movieController.getMovies);

    /*router.route('/:movie_id')
        .get(movieController.getMovie)
        .put(movieController.putMovie)
        .delete(movieController.deleteMovie);*/

    return router;
}