/**
 * Created by duyguakdemir on 10.06.17.
 */
import User from './user.model';

export function list(req, res, next) {
  User.find()
        .then((user) => {
          res.json(user);
        })
        .catch(next);
}

