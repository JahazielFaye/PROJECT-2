let signupForm = document.getElementById("signup-form");  //Getting sign-up form element
let name = document.getElementById("name");  //Get the name field
let email = document.getElementById("email"); 
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm_password");
let errorMessage = document.getElementById("error-message"); //get the error message element

//Listens for a submit event on the signup form
signupForm.addEventListener("submit", function(e) {
    e.preventDefault();   //prevents the form from submitting
    let isValid = true;

    if (!name.value) {  //checks the name field if its empty
        errorMessage.innerHTML = "Name is required";  //sends out error message
        isValid = false;  //sets form validity to false
    } else if (!email.value) {
        errorMessage.innerHTML = "Email is required";
        isValid = false;
    } else if (password.value) {
        errorMessage.innerHTML = "Passwords is required";
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        errorMessage.innerHTML = "Password do not match";
        isValid = false;
    }
});