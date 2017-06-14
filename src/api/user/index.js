import { Router } from 'express';
import * as userController from './user.controller';

/* eslint-disable no-unused-vars */
function userRoutes(passport) {
  const router = Router();

  router.post('/login', userController.login);
  router.post('/signup', userController.signup);
  router.post('/unregister', passport.authenticate('jwt', { session: false }), userController.unregister);

  return router;
}
