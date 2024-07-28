const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {
  //Method to calculate Book Rankings
// static async calculateRanking() {
//   const books = await this.findAll({
//     attributes: ['id', 'title', 'author', 'genre', 'publication_year', 'read', 'user_rating'],
//   });
  
//   for (const books of books) {
//     const id = Book.id;
//     const ratings = await this.sequelize.query(
//       `SELECT AVG (user_rating) AS average_rating FROM book_users WHERE Book_id = ${id}`,
//       { type: sequelize.QueryTypes.SELECT }
//     );
    
//     const averageRating = ratings[0].average_rating || 0;

//     await this.update({ ranking: averageRating }, { where: { id } });
//   }

//   return books; //Return the updated list of books with rankings
//   }
}

//Defining Book model attributes and options
Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },  
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // commented out genre because it was breaking the route, can add it back later
    // genre: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    publication_year: {
      type: DataTypes.INTEGER,
    },
    user_rating:{
      type: DataTypes.INTEGER,
    },
    ranking: {
      type: DataTypes.FLOAT,
    },
  },
{
  sequelize,
  modelName: 'Book',
  timestamps: false,
  }
);

module.exports = Book;