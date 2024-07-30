const { Meeting } = require("../../models");
const router = require("express").Router();

// Test route
// router.get("/", async (req, res) => {
//   res.json({ message: "You're on controllers/api/meetings" });
// });

router.post("/", (req, res) => {
  // creating a meeting
  Meeting.create({
    date: req.body.date,
    location: req.body.location,
    time: req.body.time,
    book_chapter: req.body.book_chapter,
  })
    .then((newMeeting) => {
      res.json(newMeeting);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", async (req, res) => {
  // getting meeting by id
  try {
    const meeting = await Meeting.findByPk(req.params.id);
    if (meeting) {
      res.json(meeting);
    } else {
      res.status(404).json({ message: "Meeting not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Meeting not found");
  }
});

router.get("/", async (req, res) => {
  try {
    const meetings = await Meeting.findAll();
    res.json(meetings); // make sure this returns an array, it was messing with my date formatting
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "No meetings found" });
  }
});

module.exports = router;

