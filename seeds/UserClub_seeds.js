const { User_Club } = require('../models');

const userClubData = [
  {
    clubId: 1,
    userId: '4fabaf51-6583-4455-961b-c1bbe693c4c1',
  },
  {
    clubId: 1,
    userId: '9542643c-132e-436f-a8f6-fb23c11221d3',
  },
  {
    clubId: 1,
    userId: '52c3393d-0e08-4a9d-86ab-02fe3055578e',
  },
  {
    clubId: 2,
    userId: 'e16fb6f2-ff46-4eb4-859d-e1d2b6beb4cd',
  },  
  {
    clubId: 2,
    userId: '4fabaf51-6583-4455-961b-c1bbe693c4c1',
  },
  // {
  //   clubId: 3,
  //   userId: 1,
  // },
  // {
  //   clubId: 3,
  //   userId: 3,
  // },
  // {
  //   clubId: 3,
  //   userId: 4,
  // },
  // {
  //   clubId: 3,
  //   userId: 5,
  // },
  // {
  //   clubId: 4,
  //   userId: 1,
  // },
  // {
  //   clubId: 4,
  //   userId: 2,
  // },
  // {
  //   clubId: 4,
  //   userId: 8,
  // },
  // {
  //   clubId: 5,
  //   userId: 3,
  // },
];

const seedUserClubs = () => User_Club.bulkCreate(userClubData);

module.exports = seedUserClubs;