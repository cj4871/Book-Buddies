const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response -- which has not been created yet
  // res.render('homepage');
  res.send(`You're on controllers/api/homeRoutes`);
  console.log('a thing')


});

module.exports = router;