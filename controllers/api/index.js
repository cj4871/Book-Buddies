const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes)

// this is just here as a test
router.get('/', async (req, res) => {
  res.send(`You're on api/index file`);
  console.log('a thing')
});

module.exports = router;