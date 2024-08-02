const { User } = require ('../models');

const userData = [
  {
    "id": "4fabaf51-6583-4455-961b-c1bbe693c4c1",
    "name": "test",
    "email": "test@test.com",
    "password": "password"
  },
  {
    "id": "9542643c-132e-436f-a8f6-fb23c11221d3",
    "name": "Hannah",
    "email": "hannah@hannah.com",
    "password": "password"
  },
  {
    "id": "52c3393d-0e08-4a9d-86ab-02fe3055578e",
    "name": "Emmalyn",
    "email": "emmalyn@gmail.com",
    "password": "password"
  },
  {
    "id": "e16fb6f2-ff46-4eb4-859d-e1d2b6beb4cd",
    "name": "Isaac",
    "email": "isaac@gmail.com",
    "password": "password"
  }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks:true})

module.exports = seedUsers