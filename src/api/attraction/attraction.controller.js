import Attraction from './attraction.model';

export function list(req, res, next) {
  Attraction.find()
    .then((attractions) => {
      res.json(attractions);
    })
    .catch(next);
}
