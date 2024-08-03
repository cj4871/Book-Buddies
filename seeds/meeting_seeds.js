const { Meeting } = require ('../models');

const meetingData = [
    {
      "date": "7/15/25",
      "location": "Bills House",
      "time": "5:15pm",
      "meeting_topic": "5",
      "club_id": "1"
    },
    {
      "date": "9/25/24",
      "location": "AppleBee's",
      "time": "12:00pm",
      "meeting_topic": "23",
      "club_id": "1"
    },
    {"date": "3/7/25",
      "location": "South Town Library",
      "time": "4:00pm",
      "meeting_topic": "4",
      "club_id": "2"
    }
  ]
  
  const seedMeetings = () => Meeting.bulkCreate(meetingData)

  module.exports = seedMeetings;