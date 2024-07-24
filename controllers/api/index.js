
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./bookRoutes');
const bookclubRoutes = require('./bookclubRoutes');

router.use('/users', userRoutes)
router.use('/books', bookRoutes)
router.use('/bookclubs', bookclubRoutes)

// this is just here as a test
router.get("/", async (req, res) => {
  res.send(`You're on api/index file`);
  console.log("a thing");
});

module.exports = router;
