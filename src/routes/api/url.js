const url = require('../../models/url');

module.exports = (express) => {
  const router = express.Router();

//  pulls in user input, shortens it, responds with original and new url
  router.post('/urls', (req, res) => {
    url.create(req.body, (err) => {
      req.body.shortURL.shortURL();
      // const shortURL = require('../shorten');
      res.json({ url: req.body.url, short: req.body.shortURL.shortURL() });
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });


// gets all urls
  router.get('/urls', (req, res) => {
    url.findAll((err) => {
      res.status(500).json(err);
    });
  });

  // gets url by specific id
  router.get('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.find(req.body, (err) => {
      req.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });


// updates a specific urls information
  router.post('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// deletes url by id
  router.delete('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  return router;
}; // Ends module
