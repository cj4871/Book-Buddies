const router = require('express').Router();
const apiRoutes = require('./api')

router.use('/api', apiRoutes);


// this is just here as a test
router.get('/', async (req, res) => {
  res.send(`You're on controllers/index`);
  console.log('a thing')
});


module.exports = router;