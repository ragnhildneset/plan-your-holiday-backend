import City from './city.model';

export function list(req, res, next) {
  City.find()
    .then((city) => {
      res.json(city);
    })
    .catch(next);
}
