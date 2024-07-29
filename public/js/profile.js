const joinClubButton = document.getElementById("club-search-btn"); //Join a new club button
const newBookClubButton = document.getElementById("start-new-bc-btn"); //Start a new book club button
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const newClubForm = document.getElementById("newClubForm");
const clubNamesContainer = document.querySelectorAll(".club-container h3");
const bookClubTemplate = document.getElementById("bookClubTemplate");
const clubsSection = document.querySelector(".clubs-section.shadow1");

searchButton.style.display = "none";
searchInput.style.display = "none";

//Join a new club search input
if (joinClubButton) {
  joinClubButton.addEventListener("click", function (event) {
    searchInput.style.display = "block";
    searchButton.style.display = "block";
  });
}

//New book club form
if (newBookClubButton) {
  newBookClubButton.addEventListener("click", function (event) {
    const newClubForm = document.getElementById("newClubForm");
    if (newClubForm) {
      newClubForm.style.display = "block";
      event.preventDefault();

      //Append the form at bottom of the page
      document.body.appendChild(newClubForm);
    }
  });
}

//Getting user input from form and appending in the container
document.addEventListener("DOMContentLoaded", function () {
  const clubSection = document.querySelector(".club-section.shadow1");
  const newClubForm = document.getElementById("newClubForm");

  newClubForm.addEventListener("submit", function (event) {
    event.preventDefault();

    //Getting the values from the form
    const clubNameInput = document.getElementById("clubName").value;
    const membersInput = document.getElementById("members").value;
    const descriptionInput = document.getElementById("description").value;

    //Trying to figure out why console says 'Members:undefined' and 'Description: undefined"
    console.log("Club Name Input: ", clubNameInput);
    console.log("Members Input: ", membersInput);
    console.log("Description Input ", descriptionInput);

    //New Club Container
    const newClubContainer = document.createElement("div");
    newClubContainer.classList.add("club-container");

    //New Club Name
    const groupInfo = document.createElement("h3");
    groupInfo.textContent = clubNameInput;
    newClubContainer.appendChild(groupInfo);

    //New Member names
    const membersInfo = document.createElement("p");
    membersInfo.textContent = `Members: ${membersInput}`;
    newClubContainer.appendChild(membersInfo);

    //New Description info
    const descriptionInfo = document.createElement("p");
    descriptionInfo.textContent = descriptionInput;
    newClubContainer.appendChild(descriptionInfo);

    //Appending user input from form
    clubsSection.appendChild(newClubContainer);

    //Resetting form input fields
    document.getElementById("clubName").value = "";
    document.getElementById("members").value = "";
  });
});

//Gets hard coded book clubs to guide to next page, but not the NEW book clubs
// commented out to doing another way
// document.querySelectorAll(".club-container").forEach((club) => {
//   club.addEventListener("click", () => {
//     window.location.href = `/bookclub/${club.id}`;
//   });
// });

//Started over, but kept this code just in case. Will delete if not needed before presentation day

// //Search Button to look for existing book clubs
// searchButton.addEventListener('click', async () => {
//   const searchQuery = document.getElementById('search-input').value;

//   try {
//     const response = await fetch (`/api/bookclubs/search?query=${searchQuery}`);
//     const data = await response.json();

//     //Response data
//     if (data && data.length > 0) {
//       console.log(data);
//     } else {
//       console.log('No Book Clubs Found.')
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

//   //Event listener for submit button on form for new club
//   newClubForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//  //Get user input for club name and member names
//     const clubNameInput = document.getElementById('clubName').value;
//     const newClubName = clubNameInput.value;

//     const membersInput = document.getElementById('members');
//     const newMembers = membersInput.value;

//     console.log('New Club Name:', newClubName);
//     console.log('New Members:', newMembers);

//     //Updating template with user input
//     const newClubSection = bookClubTemplate.content.cloneNode(true);
//     newClubSection.querySelector('h3').textContent = newClubName;

//     const membersParagraph = document.createElement('p');
//     membersParagraph.textContent = `Members: ${newMembers}`;
//     //Appending User input for members
//     newClubSection.querySelector('.club-container').appendChild(membersParagraph);

//     console.log('New Club Section:', newClubSection);

//     //Appending user input to Book club container
//     console.log('Clubs Section:', clubsSection);
//     clubsSection.appendChild(newClubSection);

//     //Reseting form input fields after user submits New book club info
//     clubNameInput.value = '';
//     membersInput.value = '';
//   });

//   //fetching existing book clubs and display
// fetch('/api/bookclubs/all')
// .then(response => {
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// })
// .then (data => {
//   const datalist = document.getElementById('book-clubs-list');

//   data.forEach(bookClub => {
//     const option = document.createElement('option');
//     option.value = bookClub.name;
//     datalist.appendChild(option);
//   });
// })
// .catch(error => console.error('Error finding book clubs:', error));

// //Getting user input from form to append
// function addClubContainer() {
//   const input = document.getElementById('groupInput').value;
//   const clubSection = document.querySelector('.club-section.shadow1');

//   const newClubContainer = document.createElement('div');
//   newClubContainer.classList.add('club-container');

//   const groupInfo = document.createElement('h3');
//   groupInfo.textContent = input.split(':'[0]);
//   newClubContainer.appendChild(groupInfo);

//   const membersInfo = document.createElement('p');
//   membersInfo.textContent = 'Members: ' + input.split(':')[1];
//   newClubContainer.appendChild(membersInfo);

//   clubSection.appendChild(newClubContainer);
// }
