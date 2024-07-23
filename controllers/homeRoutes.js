const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/profile', (req, res) => {
  res.render('profile');
});

router.get('/login', (req, res) => {
  // if logged in, go to profile instead
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

module.exports = router;