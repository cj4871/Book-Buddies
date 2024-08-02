// const { response } = require("express");

const addBook = document.getElementById('addBook')

async function bookHandler(event) {
    event.preventDefault()
    const clubIdArray = event.target.classList[1].split(':')
    const title = document.getElementById('addBook-bar').value;
    if (title == "") {
        window.alert("Please, add a Book to add, before trying to add nothing, you dummy");
    } else {
        const response = await fetch(`../api/book`, {
            method: 'POST',
            body: JSON.stringify({
                title
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // document.location.replace('/employee');
        window.alert("Book Successfully added");
        const book = await response.json()
        bookRelations(book.id, clubIdArray[1])
    }
}

async function bookRelations(bookId, clubId) {
    const response = await fetch(`../api/bookclub`, {
        method: 'POST',
        body: JSON.stringify({
            bookId,
            clubId
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
console.log(response)


}


addBook.addEventListener('click', bookHandler)