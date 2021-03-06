const url = require('../../models/url');
const tool = require('../../../lib/tool');

module.exports = (express) => {
  const router = express.Router();

//pulls in user input, shortens it, responds with original and new url
// router.post('/urls', (req, res) => {
//   var shortURL = require('../shorten');
//   url.create(req.body, (err) =>{
//     res.json({url: req.body.url, short: req.body.shortURL.shortURL()});
//   })
// });

// router.post('/urls', (req, res) => {
//   var shortURL = require('../shorten');
//   url.create({url: req.body.url, short: req.body.shortURL.shortURL()});
// });


router.post('/urls', (req, res) => {


  url.create(req.body, (data) => {
    req.body.shortURL.shortURL();
    var shortURL = require('../shorten');
    res.json({url: req.body.url, short: req.body.shortURL.shortURL()});
    tool.debug('New URL was created', data);
    res.status(200).json(data);
  }, (err) => {
    res.status(500).json(err);
  })
});


//gets all urls
  router.get('/urls', (req, res) => {
    url.findAll((err) => {
      res.status(500).json(err);
    })
  });

  //gets url by specific id
  router.get('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.find(req.body, (err) => {
      req.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

//creates creates a url
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
  }, (data) => {
    res.status(200).json(data);
  })
});

//deletes url by id
router.delete('/urls/:id', (req, res) => {
  req.body.id = req.params.id;
  url.destroy  (req.body, (err) => {
    res.status(500).json(err);
  }  , (data)=>{
    res.status(200).json(data);
  })
});

return router;
}; //Ends module
