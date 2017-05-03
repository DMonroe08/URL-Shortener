module.exports = (express) => {
  const router = express.Router();

//pulls in user input, shortens it, responds with original and new url
router.post('/urls', (req, res) => {
  var shortURL = require('../shorten');
  res.json({url: req.body.url, short: shortURL.shortURL()});

});

return router;
}; //Ends module
