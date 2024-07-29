const sequelize = require("../config/connection.js");
const { User, Book, BookClub, Meeting } = require("../models");

const userData = require("./userData.json");
const bookData = require("./booksData.json");
const meetingData = require("./meetingData.json");
const bookClubData = require("./bookclubData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // await Book.bulkCreate(bookData);


  await User.bulkCreate(userData);

  // await Meeting.bulkCreate(meetingData);

  await BookClub.bulkCreate(bookClubData);


  process.exit(0);
};

seedDatabase();
