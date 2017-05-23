const fs = require('fs');

exports.debug = (title, obj, sttat) => {
  const seperator = '\n========================\n';
  const msg = ' output';
  const output = seperator + title + msg + seperator;

  if (process.env.DEBUG ) {
    fs.appendFile('logs.txt', output, () => {
      console.log('success output');
      return true;
    });
  // } else {
  //   fs.appendFile('logs.txt', output, () => {
  //     console.log('error output');
  //   });
   }
};
