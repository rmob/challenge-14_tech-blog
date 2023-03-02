const createNewBlogComment = async (event) => {
    event.preventDefault();
    
    const entry_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    console.log(entry_id)
    const content = document.getElementById("comment-textarea").value.trim();
    
    if (content) {
      const response = await fetch(`/entry/${entry_id}`, {
        method: "POST",
        body: JSON.stringify({ content, entry_id }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        // document.location.replace("/dashboard");
        response.json()
      } else {
        alert("Failed to post new comment");
      }
    }
  };
  
  document
    .getElementById("comment-submit-btn")
    .addEventListener("click", createNewBlogComment);
  