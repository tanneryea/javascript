var password;
var inputRegion;


function inputPassword(){

    password = prompt("Enter a password. Password must be at least 8 characters and must not contain spaces.");

    //Checks to see if password has 8 or more characters
    while (password.length < 8) {
        password = prompt("Password is less than 8 characters. Please enter a new password.");
    }

    //Checks to see if there are any blank spaces
    while (password.indexOf(' ') >= 0){
        password = prompt("Password contains spaces. Please enter a new password.");
    }

    //Grabs display area and then inputs HTML with accepted password
    inputRegion = document.getElementById("results")
    inputRegion.innerHTML = "<p>Password accepted! Your new password is " + password + "</p>";
}