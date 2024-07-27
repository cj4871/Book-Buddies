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

searchButton.addEventListener('click', () => {
  const searchInput = document.getElementById('search-input').value;
});

 