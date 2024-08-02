const sequelize = require("../config/connection.js");
// const Book_Club = require("../models/Book_Club.js");
const seedBooks = require("./book_Seeds.js");
const seedBookClubs = require("./BookClub_seeds.js");
// const userData = require("./userData.json");
const seedClubs = require("./clubData_seeds.js");
const seedUsers = require("./user_seeds.js");
const seedUserClubs = require("./UserClub_seeds.js");
// const meetingData = require("./meetingData.json");


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedClubs()
  console.log('Clubs Seeded')
  await seedBooks()
  console.log('Books Seeded')
  await seedBookClubs()
  console.log('Books Clubs Seeded')
  await seedUsers()
  console.log('Users Seeded')
  await seedUserClubs()
  console.log('Users Clubs Seeded')



  // does not work
  // await User.bulkCreate(userData); 
  // await Meeting.bulkCreate(meetingData);




  process.exit(0);
};

seedAll();
