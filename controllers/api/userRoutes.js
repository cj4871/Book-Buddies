// Routes for logging in and out
// The user model is currently not set up. Make sure the keys match to this when you make it. I'm kinda working backwards atm.

const router = require('express').Router();
// Import the user model, which is in the models folder.
const { User } = require('../../models');

// POST request to /api/users to create a new user, and save the user id and logged in state to the session
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      HTMLTableRowElement.session.logged_in = true;
      // all good status
      res.status(200).json(userData);
    });
  } catch (err) {
    // err for a bad request
    res.status(400).json(err);
  }
});

// POST request to /api/users/login to check if login matches database, and logs them in.
router.post('/login', async (req, res) => {
  try {
    // looks for matching email in the database
    const userData = await User.findOne({ where: { email: req.body.email }});
    // if there's no match....
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again.'});
      return;
    }
  } catch (err) {
    res.status(400).json(err);
  }
});