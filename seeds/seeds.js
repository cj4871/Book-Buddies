const sequelize = require("../config/connection.js");
const { User, Book, Bookclub, Meeting } = require("../models");

const userData = require("./userData.json");
const bookData = require("./booksData.json");
const meetingData = require("./meetingData.json");
const bookClubData = require("./bookclubData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const books = await Book.bulkCreate(bookData, {});

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  // for (const user of userData) {
  //   await User.create({});
  // }

  process.exit(0);
};

seedDatabase();
