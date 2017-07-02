import Attraction from './attraction.model';

export function list(req, res, next) {
  Attraction.find()
    .then((attractions) => {
      res.json(attractions);
    })
    .catch(next);
}

exports.get = function(req, res){
  Attraction.find().exec(function(err, attraction){
    res.jsonp(attraction);
  });
};
