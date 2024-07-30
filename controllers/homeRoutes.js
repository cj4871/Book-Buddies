const router = require('express').Router();
const { User, BookClub, Book } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  // if logged in, go to profile instead
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

// withAuth stops access to profile when not logged in
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // do I need to include a model here?
    });

    const bookClubData = await BookClub.findAll()
    const bookClubs = bookClubData.map((bookClub) => bookClub.get({ plain: true}))

    const user = userData.get({ plain: true });

    res.render('profile', {
      bookClubs,
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/bookclub/:id', async (req, res) => {
  try {
    const bookClub = await BookClub.findByPk(req.params.id);
    let bClub  = bookClub.get({ plain: true})

    const bookClubData = await BookClub.findByPk(req.params.id, {
      include: [{  model: Book }]
      })

      const books  = bookClubData.Books.map((book) => book.get({ plain: true}))

    res.render('bookclub', {bClub, books});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
 })

 module.exports = router;