import { Router } from 'express';
import attraction from './attraction';
import user from './user';

const router = Router();

router.use('/attractions', attraction);
router.use('/user', user);

export default router;
