// importing Schedule model
var Travel = require('./travel.model');

//SB: Function to create the schedule for a trip.
//URL: http://localhost:9000/api/travel/postTravel
exports.postTravel = function(req, res) {
    var travel = new Travel(req.body);

    travel.save(function(err, m) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        //res.status(201).json(m);
        res.send(req.body);
    });
};

//SB: Function to get all the travels.
//URL: http://localhost:9000/api/travel/getTravels
exports.getTravels = function(req, res) {
    Travel.find(function(err, travels) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.json(travels);
    });
};

//SB: Returns a trip based in the ID
exports.getTravelbyID = function(req, res) {
    Travel.findOne({ '_id': req.params._id },  function (err, travel) {
      if (err) return handleError(err);
      res.json(travel);
    });
};
