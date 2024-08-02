const router = require("express").Router();
const userRoutes = require("./userRoutes");
const bookRoutes = require("./bookRoutes");
const clubRoutes = require("./clubRoutes");
const meetingRoutes = require("./meetingRoutes");
const book_ClubRotes = require("./book_ClubRoutes")
// const newBookClubRoutes = require("./newBookClubRoutes");

router.use("/users", userRoutes);
router.use("/book", bookRoutes);
router.use("/clubs", clubRoutes);
router.use("/meetings", meetingRoutes);
router.use('/savebook', bookRoutes);
router.use('/savedbooks', bookRoutes);
router.use("/bookclub", book_ClubRotes);

// this is just here as a test
router.get("/", async (req, res) => {
  res.send(`You're on api/index file`);
  console.log("a thing");
});

module.exports = router;
