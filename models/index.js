const User = require('./User');
const Book = require('./Book');
const Bookclub = require('./BookClub');
const Meeting = require('./Meeting');
//requiring all files in the model folder!

//Showing relationships between 
Bookclub.hasMany(User, {
    foreignKey:'User_id'
});
User.belongsTo(Bookclub,{
    foreignKey:'User_id'
});
//bookclub to user

User.hasMany(Bookclub, {
    foreignKey:'BookClub_id'
})
Bookclub.belongsTo(User, {
    foreignKey:'BookClub_id'
})
// meeting to bookclub

Bookclub.hasMany(Meeting, {
    foreignKey:'Meeting_id'
});
User.belongsTo(Bookclub,{
    foreignKey:'Meeting_id'
});
//book to user

//export 
module.exports = { User, Book, Bookclub, Meeting };
