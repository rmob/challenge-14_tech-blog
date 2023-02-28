const createNewBlogEntry = async (event) => {
  event.preventDefault();
  console.log("clicked");
  const title = document.getElementById("entry-title").value.trim();
  const content = document.getElementById("entry-body").value.trim();

  if (title && content) {
    const response = await fetch("/api/create", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to post new blog");
    }
  }
};

document
  .getElementById("blog-submit-btn")
  .addEventListener("click", createNewBlogEntry);


