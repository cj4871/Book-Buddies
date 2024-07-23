const { response } = require("express");

async function newBookClubUser(event){
    event.preventDefault();
    // add const to pull users as well as logged in user
    const first_name = document.querySelector('#first_name').value;
    const last_name = document.querySelector('#last_name').value;
    //checks if the user is online. 
    // const online_status = document.querySelector('#online_status');
    //add const for 
    const user_books = document.querySelector('#user_books').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const res = await fetch(`/api/user/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            first_name,
            last_name,
            user_books,
            online_status,
        })
    });
     if (res.ok) {
        document.location.assign(`/user/${id}`);
     } else {
        alert('Failed to add user to Book Club');
     }
}
document
    .querySelector('')
    .addEventListener('Add User', newBookClubUser);