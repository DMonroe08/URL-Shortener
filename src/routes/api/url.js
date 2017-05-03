module.exports = (express) => {
  const router = express.Router();

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
router.post('/url', (req, res) => {
  url.create(req.body, (err) => {
    res.status(500).json(err);
  }, (data) => {
    res.status(200).json(data);
  })
});

//updates a specific urls information
router.post('/urls/:id', (req, res) => {
  req.body.id = req.params.id;
  url.update(req.body, (err) => {
    res.status(500).json(err);
  }, (data) => {
    res.status(200).json(data);
  })
});

router.post('/urls', (req, res) => {
  var shortURL = require('../shorten');
  res.json({url: req.body.url, short: shortURL.shortURL()});

});

return router;
}; //Ends module
