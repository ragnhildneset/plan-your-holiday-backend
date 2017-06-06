import { Router } from 'express';
import attraction from './attraction';

const router = Router();

router.use('/attraction', attraction);

export default router;
