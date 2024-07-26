const newBookClubButton = document.getElementById("start-new-bc-btn");

if (newBookClubButton) {
  newBookClubButton.addEventListener("click", function () {
    const newClubForm = document.getElementById("newClubForm");
    if (newClubForm) {
      newClubForm.style.display = "block";
    }
  });
}