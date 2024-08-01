const User = require("./User");
const Book = require("./Book");
const Club = require("./Club");
const Meeting = require("./Meeting");
//requiring all files in the model folder!

// Club.hasMany(Book, {foreignKey: "bookclub_id"})


module.exports = { User, Book, Club, Meeting };
