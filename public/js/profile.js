const addBookClubBtn = document.getElementById("addBookClubBtn");
// const newClubName = document.getElementById("newClubName");
// const newClubDescription = document.getElementById("newClubDescription");

async function bookHandler(event) {
    event.preventDefault()
    const name = document.getElementById("newClubName").value
    const description = document.getElementById("newClubDescription").value

    if (newClubName == "" || newClubDescription == "") {
        window.alert("Please fill in forms before trying to do the thing, dummy!");
    } else {
        const response = await fetch(`../api/clubs`, {
            method: 'POST',
            body: JSON.stringify({
                name,
                description
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // document.location.replace('/employee');
        // window.alert("Cub Successfully added");
        const bookClub = await response.json();
        console.log(bookClub);
    }
}

console.log('hello my love')

addBookClubBtn.addEventListener('click', bookHandler)