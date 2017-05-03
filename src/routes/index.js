module.exports = (express) => {
  const router = express.Router();

  router.get('/url', (req, res) => {
    console.log('Router Working', req.body);
    res.json({working: 'Working'})
  });
  router.use('/api/v1', require('./api/url')(express));

  return router;
}
