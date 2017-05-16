const fs = require('fs');

exports.debug = (title, obj, status) =>{
  const seperator = '\n========================\n';
  const output = seperator + title + seperator;
  // const success = "success";
  // const error = "error";
  const fs = require('fs');
// const success
  if (!status) {
    status = '';
  }

  if (process.env.DEBUG) {
    if (status){
console.log(success(output), obj, status);
    // tool.debug(success(output), obj, true);
  } else{
    console.log(error(output), obj, status);
}

console.log('debug working');

fs.appendFile('logs.txt', output, function(err){
  if (success) return console.log(success);
  console.log('success output');
});
}

}
