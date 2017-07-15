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

// get a list of attractions belonging to one city, sorted by most popular
export function getAllFromCityId(req, res, next) {
  Attraction.find({ city: req.params.city }).sort({ 'rating.quality.rating': -1 })
    .then((attractions) => {
      res.json(attractions);
    })
    .catch(next);
}

function newRating(currentRating, amount, newRating) {
  return (newRating/(amount + 1)) + (rating * amount/(amount+1));
}

// TO-DO put rating and updating 
export function rating(req, res, next) {
  var ratings = [{ attractionId : '56aa0dc353c8040f4cc54637', quality:2, popularity:2}]
  for (var i = 0; i < ratings.length; i++) {
    var rating = ratings[i];

    Attraction.findOne({attractionId: rating.attractionId})
      .then((attraction) => {
        var newObject = { rating: {
          quality: {
            rating: newRating(attraction.rating.quality.rating, attraction.rating.quality.amount, rating.quality);
            amount: attraction.rating.quality.amount + 1
          },
          popularity: {
            rating: newRating(attraction.rating.popularity.rating, attraction.rating.popularity.amount, rating.popularity);,
            amount: attraction.rating.popularity.amount + 1
          }
        }}
        Attraction.findByIdAndUpdate(
              rating.attractionId,
              newObject)
              .then() => {
                res.json(city);
              })
              .catch(next);

          });
      });



  }
}
