const { response } = require("express");
const { User } = require("../../models");

const club_search = document.querySelector('#search-bar').value.trim();
const search_btn = document.querySelector('#submit')
const displayed_club = document.querySelector('#displayed-clubs');

search_btn.addEventListener('click', function(event) {
    event.preventDefault();
    if (club_search === '') {
    alert('Please enter a registered club or create your own!');
    } else {
    club_info(club_search);
    }
});

const club_info = (club_search) => {
    const table_search = await fetch(`/api/BookClubs`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    });
}

