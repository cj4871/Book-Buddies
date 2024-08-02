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
    const descriptionInput = document.getElementById("description").value;

    //New Club Container
    const newClubContainer = document.createElement("div");
    newClubContainer.classList.add("club-container");

    //New Club Name
    const groupInfo = document.createElement("h3");
    groupInfo.textContent = clubNameInput;
    newClubContainer.appendChild(groupInfo);

    //New Description info
    const descriptionInfo = document.createElement("p");
    descriptionInfo.textContent = descriptionInput;
    newClubContainer.appendChild(descriptionInfo);

    //Appending user input from form
    clubsSection.appendChild(newClubContainer);

    //Resetting form input fields
    document.getElementById("clubName").value = "";
    document.getElementById("members").value = "";

    //Selecitng New Club in the container and redirecting to the next page
    newClubContainer.addEventListener('click', function () {
      window.location.href = '/bookclub';
    });
  });
});




