async function editFormHandler(event) {
    event.preventDefault();
   
    const title = document.getElementById('title-input').value;
    const content = document.getElementById('content-input').value;
    
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
   
 
    const response = await fetch(`/dashboard/edit/${id}`, {
      method: 'PUT',
      body: JSON.stringify({title, content}),
      headers: {'Content-Type': 'application/json'}
    });
       
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }

  async function deleteFormHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
  
    const response = await fetch(`/dashboard/edit/${id}`, {
      method: "DELETE",
      body: JSON.stringify({ entry_id: id }),
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
  
  document
    .getElementById("delete-submit-btn")
    .addEventListener("click", deleteFormHandler);
   
  document
    .getElementById('edit-submit-btn')
    .addEventListener('click', editFormHandler);