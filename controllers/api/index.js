const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./bookRoutes');

router.use('/users', userRoutes)
router.use('/book', bookRoutes)

// this is just here as a test
router.get('/', async (req, res) => {
  res.send(`You're on api/index file`);
  console.log('a thing')
});

module.exports = router;