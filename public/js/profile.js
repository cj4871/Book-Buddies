const newBookClubButton = document.getElementById("start-new-bc-btn"); //Start a new book club button

//New book club form
if (newBookClubButton) {
  newBookClubButton.addEventListener("click", function () {
    const newClubForm = document.getElementById("newClubForm");
    if (newClubForm) {
      newClubForm.style.display = "block";

  //New Page for new book club form
  window.location.href = "";
    }
  });
}