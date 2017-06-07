/**
 * Created by duyguakdemir on 07.06.17.
 */
import { Router } from 'express';
import * as controller from './city.controller';

const router = Router();

router.get('/', controller.list);

export default router;

