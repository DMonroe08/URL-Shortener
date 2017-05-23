const expect = require('chai').expect;
// const test = require('./utilSpec');

// describe('doWork', () => {
//   it('should say do this', () => {
//   const results = test.doWork({do: 'do', this: 'this'});
//   expect(results).to.equal('do, this');
// });
// });
//
// describe('postCheck', () => {
//   it('should')
// });
// const expect = require('chai').expect;

const tool = require('../lib/tool');

// const success = 'success';

// const error = 'error';

// if (
//   tool.debug = true) {
//   console.log('test success');
// } else {
//   // tool.debug(error, false);
//   console.log('test error');
// }

// function post_test(){
//   if(process.env.DEBUG){
//     tool.debug(post)
//   }
// }
describe('utility test', () => {
  it('tests the debug tool', () => {
    const working = true;
    const toolTest = tool.debug();
    expect(toolTest).to.equal(working);
  });
});
