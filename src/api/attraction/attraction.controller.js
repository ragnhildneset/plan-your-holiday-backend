import { Types } from 'mongoose';
import Attraction from './attraction.model';

// return all attractions
export function list(req, res, next) {
  Attraction.find()
    .then((attractions) => {
      res.json(attractions);
    })
    .catch(next);
}

// return the list of currently used categories
export function categories(req, res, next) {
   Attraction.find().distinct('category').exec( function (err, docs) {
    if (err)
        res.send(err);
    res.json(docs);
  });
}

// return the list of attractions of a given category
export function category(req, res, next) {
  Attraction.find({category: req.params.category}).exec( function (err, docs) {
   if (err)
       res.send(err);
   res.json(docs);
   });
}

// return a list containing "limit"-number of attractions of a given category in descending order
export function top(req, res, next) {
  Attraction.find({category: req.params.category}).sort({'rating.quality.rating': -1}).limit(parseInt(req.params.limit)).exec( function (err, docs) {
   if (err)
       res.send(err);
   res.json(docs);
   });
}

// return the list of the top attractions for a given number
export function best(req, res, next) {
  Attraction.find().sort({'rating.quality.rating': -1}).limit(parseInt(req.params.limit)).exec( function (err, docs) {
   if (err)
       res.send(err);
   res.json(docs);
   });
}
// return the list of all attrations ordered by quality
export function all(req, res, next) {
  Attraction.find().sort({'rating.quality.rating': -1}).exec( function (err, docs) {
   if (err)
       res.send(err);
   res.json(docs);
   });
}

exports.get = function(req, res){
  Attraction.find().exec(function(err, attraction){
    res.jsonp(attraction);
  });
};
