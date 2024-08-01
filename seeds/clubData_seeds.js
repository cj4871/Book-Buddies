const { Club } = require ('../models');

const clubData = [
    {
      "name": "Great Readers",
      "description": "We love reading great books."
      
    },
    {
      "name": "Book Party",
      "description": "It's a party with books, punch, and pie"
      
    },
    {"name": "Page Turners",
      "description": "This club is very serious about reading books.  We read 4-5 books per week"
      
    }
  ];

  const seedClubs = () => Club.bulkCreate(clubData)

  module.exports = seedClubs
  