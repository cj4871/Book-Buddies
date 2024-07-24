// function to hide and show book tabs content
function openTab(evt, readStatus) {
  const tabContent = document.getElementsByClassName("tab-content");
  const tabLinks = document.getElementsByClassName("tab-links");

  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  document.getElementById(readStatus).style.display = "block";
  evt.currentTarget.className += " active";
}
