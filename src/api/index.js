import { Router } from 'express';
import attraction from './attraction';
import city from './city';

const router = Router();

router.use('/attraction', attraction);
router.use('/city', city);

export default router;
