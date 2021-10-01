// Assignment code
const generateBtn = document.querySelector("#generate");

// G L O B A L  A R R A Y S 

// arrays containing characters, symbols & numbers used in password generation

// symbols
const symbolCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// numbers
const numberCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// lowercase
const lowerCaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// uppercase
const upperCaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// V A R I A B L E S 

// password option variables

const selectSymbolCharacter;
const selectNumberCharacter;
const selectLowerCaseCharacter;
const selectUpperCaseCharacter;


// F U N C T I O N 

// create password function 
function createPassword() {
    // request input

    // validate input (between 8-128)

    // if invalid

    // if valid continues to criteria request
        // confirm symbol

        // confirm number

        // confirm lower case

        // confirm upper case

    // if four negative values inputted
    
    // if values inputted, stored here
    const passwordCriteria = []
    // if symbol selected

    // if number selected

    // if lower case selected

    // if upper case selected

    // password string composed of random characters from chosen criterias in passwordCriteria array

}

























// LEAVE CODE BELOW ALONE 

// Write password to the #password input
function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

