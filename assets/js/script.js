// Assignment code
var generateBtn = document.querySelector("#generate");

// criteria functions - using https://www.w3schools.com/html/html_charset.asp

// upper case
function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// lower case
function getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomUpperCase());

// LEAVE CODE BELOW ALONE 

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

