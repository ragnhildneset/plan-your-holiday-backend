import { Router } from 'express';
import attraction from './attraction';

const router = Router();

router.use('/attractions', attraction);

export default router;
