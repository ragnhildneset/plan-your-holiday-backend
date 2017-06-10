/**
 * Created by duyguakdemir on 10.06.17.
 */
import { Router } from 'express';
import * as controller from './user.controller';

const router = Router();

router.get('/', controller.list);

export default router;

