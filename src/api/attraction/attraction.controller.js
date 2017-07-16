import { Types } from 'mongoose';
import Promise from 'bluebird';

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
  return (newRating/(amount + 1)) + (currentRating * amount/(amount+1));
}

// TO-DO put rating and updating
export function rateAttractions(req, res, next) {
  // Mocka: en liste av nye ratings, en bruker rater en hel reise av gangen
  // const ratings = [{ attractionId: '56aa0dc353c8040f4cc54637', quality: 2, popularity: 2 }, { attractionId: '56ca0db353d8040f4cc54638', quality: 5, popularity: 5 }]
  const ratings = req.body;

  // For hver attraction: Oppdater rating
  Promise.map(ratings, rating =>
    Attraction.findOne(
      { title: rating.attractionname }
    ).then((attraction) => {
      attraction.rating.quality.rating = newRating(
        attraction.rating.quality.rating,
        attraction.rating.quality.amount,
        rating.quality);
      attraction.rating.quality.amount += 1;

      attraction.rating.popularity.rating = newRating(
        attraction.rating.popularity.rating,
        attraction.rating.popularity.amount,
        rating.popularity);
      attraction.rating.popularity.amount += 1;

      return attraction.save();
    })).then(
      res.sendStatus(200)
    ).catch(next);
}
