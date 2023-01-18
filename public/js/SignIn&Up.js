let signupLink = document.getElementById("signup-link"); //get sign-up link
let signupContainer = document.getElementById("signup-container");
let signinLink = document.getElementById("signin-link");
let signinContainer = document.getElementById("signin-container");

//listen for a click event on signuplink

signupLink.addEventListener("click", function(e) {
  e.preventDefault();   //prevent default action of the link
  signupContainer.style.display = "block";
  signinContainer.style.display = "none";
});

signinLink.addEventListener("click", function(e) {
  e.preventDefault();
  signinContainer.style.display = "block";  //show the sign in container
  signupContainer.style.display = "none";   //hide the signup container
});

// Add event listener to detect screen size changes
window.addEventListener("resize", function() {
  if (window.innerWidth < 600) {
    signinContainer.style.display = "block";
    signupContainer.style.display = "block";
  } else {
    signinContainer.style.display = "block";
    signupContainer.style.display = "none";
  }
});
