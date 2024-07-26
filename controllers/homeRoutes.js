const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('homepage');
});

// withAuth stops access to profile when not logged in
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // do I need to include a model here?
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // if logged in, go to profile instead
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

router.get('/bookclub', (req, res) => {
  res.render('bookclub');
 })

 router.get('/bookclubs', async (req, res) => {
  res.render('bookclub');
});

module.exports = router;