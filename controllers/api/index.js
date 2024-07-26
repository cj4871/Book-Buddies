const router = require("express").Router();
const userRoutes = require("./userRoutes");
const bookRoutes = require("./bookRoutes");
const bookclubRoutes = require("./bookclubRoutes");
const meetingRoutes = require("./meetingRoutes");
const newBookClubRoutes = require("./newBookClubRoutes");

router.use("/users", userRoutes);
router.use("/books", bookRoutes);
router.use("/bookclubs", bookclubRoutes);
router.use("/meetings", meetingRoutes);
router.use("newbookclub", newBookClubRoutes);

// this is just here as a test
router.get("/", async (req, res) => {
  res.send(`You're on api/index file`);
  console.log("a thing");
});

module.exports = router;
