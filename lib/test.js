
const expect = require('chai').expect;

const tool = require('./tool');

const success = 'success';

const error = 'error';

if (tool.DEBUG = true) {
  tool.debug('test success');
} else {
  // tool.debug(error, false);
  tool.debug('test error');
}
