let signupForm = document.getElementById("signup-form");  //Getting sign-up form element
let email = document.getElementById("email");  //get the email field
let password = document.getElementById("password");
let confirmPassword = document.getElementById("password_confirm");
let errorMessage = document.getElementById("error-message"); //get the error message element

//Listens for a submit event on the signup form
signupForm.addEventListener("submit", function(e) {
    e.preventDefault();   //prevents the form from submitting
    let isValid = true;

    if (!email.value) {      //checks the email field if its empty
        errorMessage.innerHTML = "Email is required";
        isValid = false;  //sets form validity to false
    } else if (password.value) {
        errorMessage.innerHTML = "Passwords is required";
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        errorMessage.innerHTML = "Password do not match";
        isValid = false;
    }
});