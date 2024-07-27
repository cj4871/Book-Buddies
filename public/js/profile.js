const joinClubButton = document.getElementById('club-search-btn'); //Join a new club button
const newBookClubButton = document.getElementById("start-new-bc-btn"); //Start a new book club button
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.style.display = "none";
searchInput.style.display = 'none';

//Join a new club search input
if (joinClubButton) {
  joinClubButton.addEventListener('click', function (event) {
    searchInput.style.display = 'block';
    searchButton.style.display = 'block';
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

//Search Button to look for existing book clubs
searchButton.addEventListener('click', async () => {
  const searchQuery = document.getElementById('search-input').value;

  try {
    const response = await fetch (`/api/bookclubs/search?query=${searchQuery}`);
    const data = await response.json();

    //Response data
    if (data && data.length > 0) {
      console.log(data);
    } else {
      console.log('No Book Clubs Found.')
    }
  } catch (error) {
    console.log(error);
  }
});

//fetching existing book clubs and display
fetch('/api/bookclubs/all')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then (data => {
    const datalist = document.getElementById('book-clubs-list');

    data.forEach(bookClub => {
      const option = document.createElement('option');
      option.value = bookClub.name;
      datalist.appendChild(option);
    });
  })
  .catch(error => console.error('Error finding book clubs:', error));