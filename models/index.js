const User = require("./User");
const Book = require("./Book");
const Club = require("./Club");
const Meeting = require("./Meeting");
const Book_Club = require("./Book_Club")
const User_Club = require("./User_Club")
//requiring all files in the model folder!

// Club.hasMany(Book, {foreignKey: "bookclub_id"})
// Book.belongsToMany(Club, {
//     through: Book_Club
// })

Club.belongsToMany(Book, {
    through: Book_Club
})

Club.belongsToMany(User, {
    through: User_Club
})

User.belongsToMany(Club, {
    through: User_Club
})

Club.hasMany(Meeting, {
    foreignKey: 'club_id'
})


module.exports = { User, Book, Club, Meeting, Book_Club, User_Club };
