import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import passport from 'passport';
import { json, urlencoded } from 'body-parser';
import Promise from 'bluebird';
import config from './config';
import { handleError, pageNotFound } from './components/errors';
import api from './api';

mongoose.Promise = Promise;
mongoose.connect(config.mongoUrl);

// Setup server
const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(passport.initialize());

app.use('/api', api);

// All other routes
app.use(pageNotFound);

// Catch all errors
app.use(handleError);

export default app;
