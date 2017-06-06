import { loadFixtures } from './helpers';
import config from '../src/config';
import '../src/app';

// verify that we are not in production
if (config.env === 'production') {
  console.log('Unable to load database in production (NODE_ENV==\'production\')');
  process.exit(1);
}

const fixtures = [
  'attraction.js'
]
.map(file => `${__dirname}/fixtures/${file}`);

loadFixtures(fixtures)
  .then(() => {
    console.log('Loaded fixtures!');
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
