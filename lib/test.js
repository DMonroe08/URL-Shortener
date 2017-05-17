const tool = require('./tool');

const success = 'success';

const error = 'error';

if (process.env.DEBUG) {
  tool.debug(success, true);
  console.log('test success');
} else {
  tool.debug(error, false);
  console.log('test error');
}
