const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');

// this'll be at /api/ which is kinda weird, I'm just kinda fumbling through.. I think home routes should be moved out of the api folder. IDK.
router.use('/home', homeRoutes);
router.use('/users', userRoutes)

// this is just here as a test
router.get('/', async (req, res) => {
  res.send(`You're on api/index`);
  console.log('a thing')
});

module.exports = router;