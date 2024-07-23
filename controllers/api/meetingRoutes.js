const { Meeting } = require("../../models");

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

module.exports = router;
