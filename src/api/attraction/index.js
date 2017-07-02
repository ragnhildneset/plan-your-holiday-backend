import { Router } from 'express';
import * as controller from './attraction.controller';

const router = Router();

router.get('/', controller.list);
router.get('/categories', controller.categories);
//router.get('/category/:category', controller.category);

export default router;
