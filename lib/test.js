const tool = require('./tool');


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
