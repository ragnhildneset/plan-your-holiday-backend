import { Router } from 'express';
import * as controller from './city.controller';

const router = Router();

router.get('/', controller.list);

export default router;
