import Schedule from './schedule.model';

export function list(req, res, next) {
  Schedule.find()
    .then((Schedule) => {
      res.json(Schedule);
    })
    .catch(next);
}