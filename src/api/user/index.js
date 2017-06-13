import { Router } from 'express';
import * as controller from './user.controller';

const router = Router();

router.get('/', controller.list);

export default router;
