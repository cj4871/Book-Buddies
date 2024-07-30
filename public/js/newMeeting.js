document.getElementById("newMeeting").addEventListener("click", function () {
  document.getElementById("myForm").style.display = "block";
});

// using the datepicker npm package
const picker = datepicker("#date", {
  formatter: (input, date, instance) => {
    const value = date.toISOString().split("T")[0];
    input.value = value;
  },
  onSelect: (instance, date) => {
    // update the input value to the display format MM/DD/YYYY
    const displayDate = date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    instance.el.value = displayDate;
  },
});

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // converts the displayed date back to the required format yyyy-MM-dd
  const displayDate = document.getElementById("date").value;
  const [month, day, year] = displayDate.split("/");
  const formattedDate = `${year}-${month}-${day}`;

  const timeValue = document.getElementById("time").value;
  const formattedTime = new Date(`1970-01-01T${timeValue}Z`).toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }
  );
  // saves the info to the db
  const formData = {
    date: formattedDate,
    time: formattedTime,
    location: document.getElementById("location").value,
    book_chapter: document.getElementById("chapter").value,
  };

  fetch("/api/meetings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      document.getElementById("myForm").style.display = "none";
      document.getElementById("myForm").reset();
      fetchMeetings();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
// retrieves the info from db and renders it to the page
function fetchMeetings() {
  fetch("/api/meetings")
    .then((response) => response.json())
    .then((data) => {
      console.log("Meetings fetched:", data);
      const meetingInfoDiv = document.getElementById("meetingInfo");
      meetingInfoDiv.innerHTML = "<h2>Meetings</h2>";
      // kept getting an error it wasn't an error, added this to figure it out
      if (Array.isArray(data)) {
        data.forEach((meeting) => {
          const meetingDate = new Date(meeting.date);
          const formattedDate = meetingDate.toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
          });
          const formattedTime = new Date(
            `1970-01-01T${meeting.time}Z`
          ).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          });
          // creates the meeting to be displayed
          const meetingDiv = document.createElement("div");
          meetingDiv.classList.add("meeting");
          meetingDiv.innerHTML = `
                        <p><span>Date:</span> ${formattedDate}</p>
                        <p><span>Time:</span> ${formattedTime}</p>
                        <p><span>Location:</span> ${meeting.location}</p>
                        <p><span>Book Chapter:</span> ${
                          meeting.book_chapter || "N/A"
                        }</p>
                    `;
          meetingInfoDiv.appendChild(meetingDiv);
        });
      } else {
        console.error("Data is not an array:", data);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

fetchMeetings();
