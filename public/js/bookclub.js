// const bookClub = await fetch

//shows "to read" tab by default
document.getElementById("default-open").click();
// function to hide and show book tabs content
function openTab(evt, tab) {
  const tabContent = document.getElementsByClassName("tab-content");
  const tabLinks = document.getElementsByClassName("tab-links");

  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
};

