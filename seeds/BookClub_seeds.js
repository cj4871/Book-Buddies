const { Book_Club } = require('../models');

const BookClubData = [
  {
    clubId: 1,
    bookId: 6,
  },
  {
    clubId: 1,
    bookId: 7,
  },
  {
    clubId: 1,
    bookId: 8,
  },
  {
    clubId: 2,
    bookId: 6,
  },
  {
    clubId: 3,
    bookId: 1,
  },
  {
    clubId: 3,
    bookId: 3,
  },
  {
    clubId: 3,
    bookId: 4,
  },
  {
    clubId: 3,
    bookId: 5,
  },
  // {
  //   clubId: 4,
  //   bookId: 1,
  // },
  // {
  //   clubId: 4,
  //   bookId: 2,
  // },
  // {
  //   clubId: 4,
  //   bookId: 8,
  // },
  // {
  //   clubId: 5,
  //   bookId: 3,
  // },
];

const seedBookClubs = () => Book_Club.bulkCreate(BookClubData);

module.exports = seedBookClubs;