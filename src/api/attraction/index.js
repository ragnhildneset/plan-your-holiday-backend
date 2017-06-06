import { Router } from 'express';
import * as controller from './attraction.controller';

const router = Router();

router.get('/', controller.list);

export default router;
