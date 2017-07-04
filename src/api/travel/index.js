module.exports = travelRoutes;


function travelRoutes() {

    var travelController = require('./travel.controller');
    var router = require('express').Router();
   
   //SB: Creating a travel 
    router.post('/postTravel', travelController.postTravel);
    router.get('/getTravel', travelController.getTravel);
        //.get(movieController.getMovies);

    /*router.route('/:movie_id')
        .get(movieController.getMovie)
        .put(movieController.putMovie)
        .delete(movieController.deleteMovie);*/

    return router;
}