//function to create the shortened url
function shortURL(){
  var components = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var result = "";
  var amount = 8;

//Takes in url and outputs random string
  for (var i = 0; i < amount; i++){
  result += components.charAt(Math.floor(Math.random() * components.length));
};
  return result;
}

//exports result of the url shortener
exports.shortURL = shortURL;
