module.exports = (express) => {
  const router = express.Router();

  // consoles out working when /url is used in localhost
  router.get('/url', (req, res) => {
    console.log('Router Working', req.body);
    res.json({ working: 'Working' });
  });

  // creates endpoints
  router.use('/api/v1', require('./api/url')(express));

  return router;
};
