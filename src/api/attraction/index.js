import { Router } from 'express';
import * as controller from './attraction.controller';

const router = Router();

// get all attractions
router.get('/', controller.list);
// get all categories
router.get('/categories', controller.categories);
// get all attractions of a given category
// e.g. api/attractions/category/Museums
router.get('/category/:category', controller.category);
// get n attractions of a given category in a descending order
// e.g. api/attractions/top/3/Museums
router.get('/top/:limit/:category', controller.top);
router.get('/top/:limit', controller.best);
router.get('/top/', controller.all);

export default router;
