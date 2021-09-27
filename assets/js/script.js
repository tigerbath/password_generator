// Assignment code
var generateBtn = document.querySelector("#generate");

// criteria functions - using https://www.w3schools.com/html/html_charset.asp

// number
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// upper case
function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// lower case
function getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// special character
function getRandomSpecialCharacter() {
    const symbols = "!#$%&'()\*+,-./:;<=>?@[\]^\_`{|}~"
    return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomNumber());
console.log(getRandomLowerCase());
console.log(getRandomLowerCase());
console.log(getRandomSpecialCharacter());

// LEAVE CODE BELOW ALONE 

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

