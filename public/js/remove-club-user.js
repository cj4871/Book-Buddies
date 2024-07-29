

const leaveButtonHandler = async (event) => {
    if (event.target.hasAttribute('User_id')) {
        const id = event.target.getAttribute('User_id');
        const response = await fetch(`/api/Booclub/${id}`, {
            method: 'POST',
        });

        if (response.ok) {
            document.location.replace('/profile');
            console.log(response)
      } else {
        alert('Failed to Remove');
      }
    }
  };
  
  document.querySelector('#leave_btn').addEventListener('click', leaveButtonHandler);
