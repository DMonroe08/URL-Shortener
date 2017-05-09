exports.debug = (title, obj, status) =>{
  const seperator = '\n========================\n';
  const output = seperator + title + seperator;

  if (!status) {
    status = '';
  }
  if (process.env.DEBUG) {
    tool.debug(output, obj, status);
  }
  if(process.env.DEBUG){
    tool.debug(output, obj, status);
  }
};
