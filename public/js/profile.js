const newBookClubButton = document.getElementById("start-new-bc-btn"); //Start a new book club button

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

 