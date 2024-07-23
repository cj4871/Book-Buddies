const { Meeting } = require("../../models");
const router = require("express").Router();

router.post("/", (req, res) => {
  Meeting.create({
    date: req.body.date,
    location: req.body.date,
    time: req.body.time,
    book_chaper: req.body.book_chaper,
  })
    .then((newMeeting) => {
      res.json(newMeeting);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/Metting/:id"), async (req, res) => {};

module.exports = router;
