document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.querySelector("#searchbutton");
  const searchName = document.querySelector("#search-bar");

  // grabs the search field value and runs the bookInfo function using the book name
  searchInput.addEventListener('click', function (event) {
    event.preventDefault();

    const bookValue = searchName.value.trim();
    if (bookValue === '') {
      alert('Please enter a book title');
    } else {
      bookInfo(bookValue);
    }
  });
  // api call to fetch the book info and append it to the html
  const bookInfo = (bookValue) => {
    const bookSearch = `https://openlibrary.org/search.json?title=${encodeURIComponent(
      bookValue
    )}`;
    fetch(bookSearch)
      .then((res) => res.json())
      .then((data) => {
        const { docs } = data;
        const [firstDoc] = docs;
        const { author_name, title, key, cover_edition_key, first_publish_year } = firstDoc;

        const bookDetailsUrl = `https://openlibrary.org${key}.json`;
        fetch(bookDetailsUrl)
          .then((res) => res.json())
          .then((bookData) => {
            const description = bookData.description;

            const details = document.getElementById('detailsDisplay');
            const bookTitle = document.createElement('p');
            const author = document.createElement('p');
            const descr = document.createElement('p');
            const pubYear = document.createElement('p');
            const saveButton = document.createElement('button');
            const clearButton = document.createElement('button');

            bookTitle.innerHTML = `Title: ${title}`;
            author.innerHTML = `Author: ${author_name.join(',')}`;
            descr.innerHTML = `Description: ${description}`;
            pubYear.innerHTML = `Year: ${first_publish_year}`;
            saveButton.textContent = 'Save Book';
            saveButton.id = 'saveButton';
            clearButton.textContent = 'Nevermind';
            clearButton.id = 'clearButton';

            details.appendChild(bookTitle);
            details.appendChild(author);
            details.appendChild(descr);
            details.appendChild(pubYear);
            details.appendChild(saveButton);
            details.appendChild(clearButton);


            // save button to add the searched book to the db
            saveButton.addEventListener('click', function () {
              const newBook = {
                title: title,
                author: author_name.join(','),
                publication_year: first_publish_year,
                // genre: 'default_genre' 
              };
              saveNewBook(newBook);
            });
            // clear button removes search data if you decide against adding a book 
            clearButton.addEventListener('click', function () {
              clearSearchResults();
            });

            // api call to get the book cover image
            if (cover_edition_key) {
              const coverImageUrl = `https://covers.openlibrary.org/b/olid/${cover_edition_key}-M.jpg`;
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
  // uses the savebook route to post the book data to the db
  const saveNewBook = (bookData) => {
    fetch('/api/book', {
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
        clearSearchResults();
        fetchSavedBooks();
      })
      .catch((error) => {
        console.error('Error saving book:', error);
        alert('Error saving book. Please try again.');
      });
  };


  // clears the searched result after the book is saved to the db
  const clearSearchResults = () => {
    const details = document.getElementById('detailsDisplay');
    details.innerHTML = '';
    const coverImageElement = document.getElementById("coverImage");
    if (coverImageElement) {
      coverImageElement.src = '';
    }
    searchName.value = '';
  };
});

// fetch and display saved books
const fetchSavedBooks = () => {
  fetch('/api/book')
    .then(response => response.json())
    .then(data => {
      const savedBooksDisplay = document.getElementById('savedBooksDisplay');
      savedBooksDisplay.innerHTML = ''; 

      data.forEach(book => {
        const bookTitle = document.createElement('p');
        bookTitle.textContent = '';

        const bookCover = document.createElement('img');
        bookCover.alt = `Cover of ${book.title}`;
        bookCover.id = 'cover';

        const coverSearchUrl = `https://openlibrary.org/search.json?title=${encodeURIComponent(book.title)}`;
        fetch(coverSearchUrl)
          .then(res => res.json())
          .then(data => {
            const { docs } = data;
            if (docs.length > 0) {
              const coverEditionKey = docs[0].cover_edition_key;
              if (coverEditionKey) {
                const coverImageUrl = `https://covers.openlibrary.org/b/olid/${coverEditionKey}-M.jpg`;
                bookCover.src = coverImageUrl;
              } else {
                bookCover.alt = "No cover image available";
              }
            } else {
              bookCover.alt = "No cover image available";
            }
          })
          .catch(error => console.error("Error fetching cover image:", error));

        savedBooksDisplay.appendChild(bookTitle);
        savedBooksDisplay.appendChild(bookCover);
      });
    })
    .catch(error => console.error("Error fetching saved books:", error));
};


// fetch and display saved books on page load
document.addEventListener('DOMContentLoaded', fetchSavedBooks);
// fetchSavedBooks();
