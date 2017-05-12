exports.debug = (title, obj, status) =>{
  const seperator = '\n========================\n';
  const output = seperator + title + seperator;

  const fs = require('fs');
// const success
  if (!status) {
    status = '';
  }
  if (process.env.DEBUG) {
    tool.debug(success(output), obj);
    fs.appendFile('logs.txt', output, function (err){
      if (err) return console.log(err);
      console.log('n');
    });
  } else{

    tool.debug(error(output), obj);
    fs.appendFile('logs.txt', output, function (err){
      if (err) return console.log(err);
      console.log('n');
  });
}
}
