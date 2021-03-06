// importing Travel model
var Travel = require('./travel.model');

//SB: Function to create the schedule for a trip.
//URL: http://localhost:9000/api/travel/postTravel
export function postTravel(req, res) {
    //var travel = new Travel(req.body);
    var travel = new Travel();
    travel.username = req.body.username;
    travel.arrival = req.body.arrival;
    travel.departure = req.body.departure;
    travel.schedule = req.body.schedule;
    travel.destination = req.body.destination;

    travel.isNew = true;

    travel.save(function(err, m) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        //res.status(201).json(m);
        res.send(travel._id);
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

exports.getTravelsbyUsername = function(req, res) {
    Travel.find({username: req.params.username}).exec(function(err, travels) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.json(travels);
    });
};

exports.getLatest = function(req, res) {
    Travel.findOne({username: req.params.username}).sort({ '$natural': -1  }).exec(function(err, travels) {
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

// JF: Returns a trip based in the username
export function getTravelbyUsername(req, res, next) {
  Travel.findOne({ user: req.params.user })
    .then((travel) => {
      res.json(travel);
    })
    .catch(next);
}
