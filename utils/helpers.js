// module.exports ={
//     const checkOnlineStatus = async() => {
//         try{
//             //fetches image to display online status on page
//             const online = await fetch ();
//             // if there page is loaded and working an online status check will occur every 5 minutes to see if the user is still online
//             return online.status >= 200 && online.status <= 299;
//         } catch (err){
//             return false;
//         }
//     };
//     setInterval(async() => {
//         const status = await checkOnlineStatus();
//         const statusDisplay =  document.getElementById('onlineStatus');
//         statusDisplay.style.color: 'green'
//     }, 300000);
// }

//not sure if this is where it is supposed to go. was adding the online functionality




// gets info from the search form, placeholder for now, will need to edit this when the form is created
// document.getElementById('search-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const searchBar = document.getElementById('search-bar');
//     const searchInfo = searchBar.value.trim();
//     bookInfo(searchInfo);

// });

// hardcoded until we make search form
const searchInfo = 'fight club';

const bookInfo = (searchInfo) => {
  const bookSearch = `https://openlibrary.org/search.json?title=${encodeURIComponent(
    searchInfo
  )}`;
  fetch(bookSearch)
    .then((res) => res.json())
    .then((data) => {
      const { docs } = data;
      const [firstDoc] = docs;
      const { author_name, title, key, cover_edition_key, first_publish_year } =
        firstDoc;
      // render these to the page when it's built
      console.log("Author:", author_name);
      console.log("Title:", title);
      console.log("Key:", key);
      console.log("First Publish Year:", first_publish_year);

      // fetch book details to get the description
      const bookDetailsUrl = `https://openlibrary.org${key}.json`;
      fetch(bookDetailsUrl)
        .then((res) => res.json())
        .then((bookData) => {
          const description = bookData.description;
          console.log("Description:", description);

          // get the cover image URL
          if (cover_edition_key) {
            const coverImageUrl = `https://covers.openlibrary.org/b/olid/${cover_edition_key}-M.jpg`;
            console.log("Cover Image URL:", coverImageUrl);

            // display the cover image in the DOM once we have a palceholder
            const coverImageElement = document.getElementById("cover-image");
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

bookInfo(searchInfo);



