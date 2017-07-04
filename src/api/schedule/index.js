import { Router } from 'express';
import * as controller from './schedule.controller';

const router = Router();

router.get('/', schedule.list);

export default router;