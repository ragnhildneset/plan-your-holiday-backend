/* eslint-disable indent,import/prefer-default-export,import/prefer-default-export */
/**
 * Created by duyguakdemir on 07.06.17.
 */
import City from './city.model';

export function list(req, res, next) {
  City.find()
        .then((city) => {
          res.json(city);
        })
        .catch(next);
}
