import { Router } from 'express';
import attraction from './attraction';
import city from './city';
import user from './user';

const router = Router();

router.use('/attraction', attraction);
router.use('/city', city);
router.user('/user', user);

export default router;
