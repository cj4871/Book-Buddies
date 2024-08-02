const router = require('express').Router();
const { User, Club, Book } = require('../models');
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

    const ClubData = await Club.findAll( {include: [{model: user}]})
    const Clubs = ClubData.map((Club) => Club.get({ plain: true}))

    const user = userData.get({ plain: true });

    res.render('profile', {
      Clubs ,
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/bookclub/:id', async (req, res) => {
  try {
    const bClubData = await Club.findByPk(req.params.id);
    let bookClub  = bClubData.get({ plain: true})

    const bookClubData = await Club.findByPk(req.params.id, {
      include: [{  model: Book }]
      })

      const books  = bookClubData.books.map((book) => book.get({ plain: true}))

    res.render('bookclub',
       {
        bookClub,
         books
        });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
 })

//  router.post("/bookclub/:id", async (req, res) => {
//   try {
//     const bookClubData = await Book_Club.create({
//       clubId: req.params.clubId,
//       bookId: req.body.bookId,
//     });
//     res.status(200).json(bookClubData);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

 module.exports = router;
