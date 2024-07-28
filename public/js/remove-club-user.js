const removeUser = document.querySelector("#remove_btn")

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('User_id')) {
        const id = event.target.getAttribute('User_id');
        const response = await fetch(`/api/User/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/User');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  fetch()