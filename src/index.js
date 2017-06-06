import config from './config';
import app from './app';

/**
 * Start the server
**/
app.listen(config.port, () => {
  console.log(`Express server listening on ${config.port}, in ${config.env} mode`);
});
