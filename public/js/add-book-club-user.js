const { response } = require("express");
const { newBookClub } = require("../../models");


searchButton.addEventListener('click', async function (event)){
  event.preventDefault();
  const club_search = document.getElementById('club-search').value;

  if (club_search === ''){
    alert('Please enter a registered club_search, or create a New Book club');
  } else {
    const memberNames = []; 
    const descriptionInput = document.getElementById('description').value;

    for (let i = 1; i <= numberOfMembers; i++) {
      const memberName = document.getElementById(`member${i}`).value;
      memberNames.push(memberName);
    }

    console.log('Description Input: ', descriptionInput);
    console.log('Member Names: ', memberNames); 
  }
}
