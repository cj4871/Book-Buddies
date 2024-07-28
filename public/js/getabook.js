document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector("#searchbutton");
  const searchName = document.querySelector("#search-bar");
  
  // should clear the details when a new search is made but it makes the cover image not show up for some reason
  // const clearPreviousResults = () => {
  //   const details = document.getElementById('detailsDisplay');
  //   details.innerHTML = ''; 
    
  // };

  searchInput.addEventListener('click', function(event) {
    event.preventDefault();
    
    const bookValue = searchName.value.trim();
    if (bookValue === '') {
      alert('Please enter a book title');
    } else {
      // clearPreviousResults();
      bookInfo(bookValue);
    }
    })
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
            const saveButton = document.createElement('button');
  
            bookTitle.innerHTML = `Title: ${title}`;
            author.innerHTML = `Author: ${author_name}`;
            descr.innerHTML = `Description: ${description}`;
            pubYear.innerHTML = `Year: ${first_publish_year}`;
            saveButton.textContent = 'Save Book';
            saveButton.id = 'saveButton';
      
            details.appendChild(bookTitle);
            details.appendChild(author);
            details.appendChild(descr);
            details.appendChild(pubYear);
            details.appendChild(saveButton);
  
            // get the cover image URL
            if (cover_edition_key) {
              const coverImageUrl = `https://covers.openlibrary.org/b/olid/${cover_edition_key}-M.jpg`;
              console.log("Cover Image URL:", coverImageUrl);
  

              const coverImageElement = document.getElementById("coverImage");
              if (coverImageElement) {
                coverImageElement.src = coverImageUrl;
              }
              
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



  const saveBook = (bookData) => {
    fetch('/api/savebook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Book saved:', data);
      alert('Book saved successfully!');
    })
    .catch((error) => {
      console.error('Error saving book:', error);
      alert('Error saving book. Please try again.');
    });
  };