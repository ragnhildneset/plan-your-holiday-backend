var Travel = require ('./travel.model');
var jwt = require('jwt-simple');


/*SB: Function to create an User*/

export function list(req, res, next) {
  Travel.find()
    .then((travel) => {
      res.json(travel);
    })
    .catch(next);
}
