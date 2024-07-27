const searchInput = document.querySelector(".button1");
const searchName = document.querySelector("#search-bar");


searchInput.addEventListener('click', function(event) {
  event.preventDefault();
  const bookValue = searchName.value.trim();
  if (bookValue === '') {
    alert('Please enter a book title');
  } else {
    bookInfo(bookValue);
  }
  });


const bookInfo = (bookValue) => {
  const bookSearch = `https://openlibrary.org/search.json?title=${encodeURIComponent(
    bookValue
  )}`;
  fetch(bookSearch)
    .then((res) => res.json())
    .then((data) => {
      const { docs } = data;
      const [firstDoc] = docs;
      const { author_name, title, key, cover_edition_key, first_publish_year } =
        firstDoc;
      // render these to the page when it's buil

      // console.log("Author:", author_name);
      // console.log("Title:", title);
      // console.log("Key:", key);
      // console.log("First Publish Year:", first_publish_year);

      // fetch book details to get the description
      const bookDetailsUrl = `https://openlibrary.org${key}.json`;
      fetch(bookDetailsUrl)
        .then((res) => res.json())
        .then((bookData) => {
          const description = bookData.description;
          console.log("Description:", description);

          const details = document.getElementById('detailsDisplay');
          const bookTitle = document.createElement('p'); 
          const author = document.createElement('p');
          const descr = document.createElement('p');
          const pubYear = document.createElement('p');

          bookTitle.innerHTML = `${title}`;
          author.innerHTML = `${author_name}`;
          descr.innerHTML = `${description}`;
          pubYear.innerHTML = `${first_publish_year}`;
    
          details.appendChild(bookTitle);
          details.appendChild(author);
          details.appendChild(descr);
          details.appendChild(pubYear);

          // get the cover image URL
          if (cover_edition_key) {
            const coverImageUrl = `https://covers.openlibrary.org/b/olid/${cover_edition_key}-M.jpg`;
            console.log("Cover Image URL:", coverImageUrl);

            // display the cover image in the DOM once we have a palceholder
            const coverImageElement = document.getElementById("coverImage");
            if (coverImageElement) {
              coverImageElement.src = coverImageUrl;
            }
            // change all of these errors to render on the page once it's built
          } else {
            console.log("No cover image available.");
          }
        })
        .catch((error) => {
          console.error("Error fetching book details:", error);
        });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });   
};

// bookInfo(searchInfo);



