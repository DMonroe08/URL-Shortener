const url = require('../../models/url');
const tool = require('../../../lib/tool');

module.exports = (express) => {
  const router = express.Router();

//pulls in user input, shortens it, responds with original and new url
router.post('/urls', (req, res) => {
  var shorten = require('../shorten');
console.log("=======", shorten.shortURL());
  // url.create(payload =>{}, err, success)

var workingURL = {url : req.body.url, short : shorten.shortURL()};
  url.create(workingURL, (err) => {
    req.body.shortURL.shortURL();
    var shortURL = require('../shorten');
    res.json({url: req.body.url, short: req.body.shortURL.shortURL()});
    res.status(500).json(err);
  }, (data) => {
    res.status(200).json(data);
  })
});


//gets all urls
  router.get('/urls', (req, res) => {
    url.findAll((err) => {
      res.status(500).json(err);
      tool.debug('Error: Finding all URL failed', data, 'Error');
    }, (data) => {
      res.status(200).json(data);
      tool.debug('All URLs were accessed', data, true);
    })
  });

  //gets url by specific id
  router.get('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.find(req.body, (err) => {
      req.status(500).json(err);
      tool.debug('Error: Finding URL failed', data, 'Error');
    }, (data) => {
      res.status(200).json(data);
      tool.debug('One URL was accessed', data, true);
    })
  });

// //creates creates a url
// router.post('/urls', (req, res) => {
//   url.create(req.body, (err) => {
//     res.status(500).json(err);
//   }, (data) => {
//     res.status(200).json(data);
//   })
// });

//updates a specific urls information
router.post('/urls/:id', (req, res) => {
  req.body.id = req.params.id;
  url.update(req.body, (err) => {
    res.status(500).json(err);
    tool.debug('Error: updating URL failed', data, 'Error');
  }, (data) => {
    res.status(200).json(data);
    tool.debug('One URL was updated', data, true);
  })
});

//deletes url by id
router.delete('/urls/:id', (req, res) => {
  req.body.id = req.params.id;
  url.destroy  (req.body, (err) => {
    res.status(500).json(err);
    tool.debug('Error: deleting URL failed', data, 'Error');
  }  , (data)=>{
    res.status(200).json(data);
    tool.debug('One URL was deleted', data, true);
  })
});

return router;
}; //Ends module
