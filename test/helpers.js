import Promise from 'bluebird';
import { values } from 'lodash';
import path from 'path';
import mongoose from 'mongoose';

const fromFileToMongoDB = fixture => Promise.map(fixture.data, (document) => {
  const Model = mongoose.connection.model(fixture.model);
  const doc = new Model(document);
  return doc.save(document);
});

export const clearDB = () => Promise.map(
  values(mongoose.connection.collections), collection => collection.remove({})
);

export const loadFixtures = fixtures => clearDB()
  .then(() => Promise.mapSeries(fixtures, (fixtureName) => {
    const fixture = require(path.resolve(fixtureName)).default; // eslint-disable-line
    return fromFileToMongoDB(fixture);
  }));
