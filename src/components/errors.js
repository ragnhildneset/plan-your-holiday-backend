import config from '../config';

export class NotFoundError extends Error {
  status = 404;
  name = 'NotFoundError';

  constructor(type) {
    super(`Could not find this ${type}.`);
    this.message = `Could not find this ${type}.`;
  }
}

export function pageNotFound(req, res) {
  res
    .status(404)
    .json({
      message: 'Page Not Found'
    });
}
/**
* Error middleware, catches all remaining errors
* @param  {object}   err  The error that will be return to the user
* @param  {object}   req  Request object
* @param  {object}   res  Response object
* @param  {Function} next Function calls the next middleware
*/
export function handleError(err, req, res, next) { // eslint-disable-line
  if (config.env === 'development') {
    console.log(err.stack); // eslint-disable-line
  }

  const status = err.status || 500;
  return res
    .status(status)
    .json(err.payload || {
      name: err.name,
      message: err.message
    });
}
