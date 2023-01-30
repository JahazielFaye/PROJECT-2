var postForm = document.getElementById("postForm");
var newPost = document.getElementById("newPost");
var button = document.getElementById("button");

const handlebars = require('handlebars');




if(postForm){
    var newPost = document.getElementById("newPost");
    var button = document.getElementById("button");
    button.addEventListener("click", function(e) {
      e.preventDefault();
      var comment = newPost.value;
      if (comment.trim() !== "") {
        var newComment = document.createElement("p");
        newComment.innerHTML = comment;
        postForm.appendChild(newComment);
        newPost.value = "";
      }
    });
    // Add a submit event listener to the form
form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent the form from submitting

  // Get the value of the input
  const content = input.value;

  // Send a POST request to the server with the new post content
  try {
      const response = await fetch("/api/posts", {
          method: "POST",
          body: JSON.stringify({ content }),
          headers: { "Content-Type": "application/json" },
      });

      // Check if the post was successfully created
      if (response.ok) {
          alert("Post created successfully!");
          input.value = ""; // Clear the input
      } else {
          alert("Error creating post");
      }
  } catch (error) {
      console.error(error);
  }
});

}


var template = Handlebars.compile(document.getElementById("template").innerHTML);
const html = template(data);
document.getElementById("some-element").innerHTML = html;