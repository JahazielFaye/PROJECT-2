// Get the form element
var form = document.getElementsByTagName("form")[0];

// Get the textarea element
var textarea = form.getElementsByTagName("textarea")[0];

// Get the button element
var button = form.getElementsByTagName("button")[0];

// Listen for the click event on the button
button.addEventListener("click", function(e) {
  // Prevent the default behavior
  e.preventDefault();

  // Get the textarea value
  var comment = textarea.value;

  // Create a new paragraph element with the textarea value
  var newComment = document.createElement("p");
  newComment.innerHTML = comment;

  // Append the new paragraph element to the form
  form.appendChild(newComment);

  // Clear the textarea value
  textarea.value = "";
});
