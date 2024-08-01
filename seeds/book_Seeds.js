const { Book } = require("../models")

const bookData = [
  {
    title: "Eloquent JavaScript, Second Edition",
    // "bookclub_id": "1"
  },
  {
    title: "Learning JavaScript Design Patterns",
    // "bookclub_id": "2"
  },
  {
    title: "Speaking JavaScript",
    // "bookclub_id": "2"
  },
  {
    title: "Programming JavaScript Applications",
    // "bookclub_id": "3"
  },
  {
    title: "Understanding ECMAScript 6",
    // "bookclub_id": "3"
  },
  {
    title: "To Kill a Mockingbird",
    // "bookclub_id": "1"
  },
  {
    title: "1984",
    // "bookclub_id": "1"
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    // "bookclub_id": "1"
  },
  {
    title: "The Road",
    // "bookclub_id": "1"
  },
  {
    title: "The Odyssey",
    // "bookclub_id": "1"
  }
]

const seedBooks = () => Book.bulkCreate(bookData)

module.exports = seedBooks