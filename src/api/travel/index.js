module.exports = travelRoutes;


function travelRoutes() {

    var travelController = require('./travel.controller');
    var router = require('express').Router();

   //SB: Creating a travel
    router.post('/postTravel', travelController.postTravel);
    router.get('/getTravels', travelController.getTravels);
    router.route('/getTravel/:_id').get(travelController.getTravelbyID);
    router.route('/getTravelByUser/:username').get(travelController.getTravelbyUsername);

    return router;
}
