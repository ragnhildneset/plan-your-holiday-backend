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

// TODO create a function which returns all attractions of a category
export function category(req, res, next) {
  Attraction.find({category: req.params.category}).exec( function (err, docs) {
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
