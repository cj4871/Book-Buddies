// const { response } = require("express");

const addBook = document.getElementById('addBook')

async function bookHandler(event) {
    event.preventDefault()
    
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
        bookRelations()
    }
}

async function bookRelations() {
    const responseBook = await fetch(`../api/book`);
    let json = await responseBook.json()
    let bookId = json[json.length - 1].id

    const queryString = window.location.pathname
    let stringArray = queryString.split('/')
    const clubId = stringArray[2]

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