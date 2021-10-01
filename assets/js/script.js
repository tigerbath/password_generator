// Assignment code
var generateBtn = document.querySelector("#generate");

// G L O B A L  A R R A Y S

// arrays containing characters, symbols & numbers used in password generation

// symbols
const symbolCharacter = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// numbers
const numberCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// lowercase
const lowerCaseCharacter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// uppercase
const upperCaseCharacter = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// F U N C T I O N
// const createPassword = function () {}
// create password function
function createPassword() {
  // request input
  const passwordLength = parseInt(
    prompt("Please input a password length between 8 and 128")
  );
  // validate input (between 8-128)
  if (passwordLength < 8 || passwordLength > 128) {
    // if password is invalid length
    alert(
      "Password length must be between 8-128 characters in length, please try again"
    );
    return "";
  }

  // password option variables
  const selectSymbolCharacters = confirm("Do you need symbol characters?");
  const selectNumberCharacters = confirm("Do you need numbers?");
  const selectLowerCaseCharacters = confirm(
    "Do you need lowercase characters?"
  );
  const selectUpperCaseCharacters = confirm(
    "Do you need uppercase characters?"
  );

  // check if user has selected at least one option
  if (
    !selectSymbolCharacters &&
    !selectNumberCharacters &&
    !selectLowerCaseCharacters &&
    !selectUpperCaseCharacters
  ) {
    alert("You must select atleast one option");
    return "";
  }

  // array with selected choices
  const chosen = [];

  // if valid continues to criteria request
  // confirm symbol
  if (selectSymbolCharacters) {
    chosen.push(symbolCharacter);
  }
  // confirm number
  if (selectNumberCharacters) {
    chosen.push(numberCharacter);
  }
  // confirm lower case
  if (selectLowerCaseCharacters) {
    chosen.push(lowerCaseCharacter);
  }
  // confirm upper case
  if (selectUpperCaseCharacters) {
    chosen.push(upperCaseCharacter);
  }

  // array for generated password
  const password = [];

  for (let i = 0; i < passwordLength; i++) {
    // get random index from chosen array
    const randomChosenArrayIndex = Math.floor(Math.random() * chosen.length);

    // get random character set
    const randomCharacterSet = chosen[randomChosenArrayIndex];

    // get random character index
    const randomCharacterIndex = Math.floor(
      Math.random() * randomCharacterSet.length
    );

    // get random character
    const randomCharacter = randomCharacterSet[randomCharacterIndex];

    password.push(randomCharacter);
  }

  // convert array for generated password to string
  return password.join("");
}

// LEAVE CODE BELOW ALONE

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
