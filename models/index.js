const User = require("./User");
const Book = require("./Book");
const BookClub = require("./BookClub");
const Meeting = require("./Meeting");
//requiring all files in the model folder!

BookClub.hasMany(Book, { foreignKey: "bookclub_id",
})



//Showing relationships between
// BookClub.hasMany(User, {
//   foreignKey: "User_id",
// });

// BookClub.hasMany(Meeting, {
//   foreignKey: "Meeting_id",
// });

// // BookClub.belongsTo(User, {
// //   foreignKey: "BookClub_id",
// // });

// User.hasMany(BookClub, {
//   foreignKey: "BookClub_id",
// });

// User.belongsTo(BookClub, {
//   foreignKey: "User_id",
// });

// User.belongsTo(BookClub, {
//   foreignKey: "Meeting_id",
// });
// // User.hasMany(Book, {
// //     foreignKey:'Book_id'
// // });
// Book.hasMany(User, {
//   foreignKey: "User_id",
// });
// Book.belongsTo(Meeting, {
//   foreignKey: "Book_id",
// });
// Book.belongsTo(User, {
//   foreignKey: "Book_id",
// });

//export
module.exports = { User, Book, BookClub, Meeting };
