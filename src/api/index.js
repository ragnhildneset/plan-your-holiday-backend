import { Router } from 'express';
import attraction from './attraction';


const router = Router();

var passport = require('passport');
var jwtConfig = require('./passport/jwtConfig');

/*SB: Routers*/

var userRoutes = require("./user/index");
router.use('/attractions', attraction);
router.use('/user', userRoutes(passport));




export default router;
