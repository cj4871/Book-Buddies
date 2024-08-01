const { Book_Club } = require('../models');

const BookClubData = [
  {
    club_id: 1,
    book_id: 6,
  },
  {
    club_id: 1,
    book_id: 7,
  },
  {
    club_id: 1,
    book_id: 8,
  },
  {
    club_id: 2,
    book_id: 6,
  },
  {
    club_id: 3,
    book_id: 1,
  },
  {
    club_id: 3,
    book_id: 3,
  },
  {
    club_id: 3,
    book_id: 4,
  },
  {
    club_id: 3,
    book_id: 5,
  },
  // {
  //   club_id: 4,
  //   book_id: 1,
  // },
  // {
  //   club_id: 4,
  //   book_id: 2,
  // },
  // {
  //   club_id: 4,
  //   book_id: 8,
  // },
  // {
  //   club_id: 5,
  //   book_id: 3,
  // },
];

const seedBookClubs = () => Book_Club.bulkCreate(BookClubData);

module.exports = seedBookClubs;