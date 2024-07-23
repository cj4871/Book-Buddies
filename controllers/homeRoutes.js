const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/profile', (req, res) => {
  res.render('profile');
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;