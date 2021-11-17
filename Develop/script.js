// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// declares function
function writePassword () {

// asks for password length
  passwordLength = prompt("How many characters would you like your password to contain?");

// alert if password length criteria is not met
if (passwordLength <8) {
  alert ("Password must be at least 8 characters");
  return writePassword()
}
else if (passwordLength >128) {
  alert ("Password must be less than 128 characters");
  return writePassword()
}
  useLowercase = confirm("Select OK to allow lowercase letters.");

  useUppercase = confirm("Select OK to allow uppercase letters.");

  useNumber = confirm("Select OK to allow numbers.");

  useCharacter = confirm("Select OK to allow special characters.")

// alert if no character type is selected
if (useLowercase+useUppercase+useNumber+useCharacter == false) {
  alert ("You must allow at least 1 character type for your password.")
}

}

// declares variables
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var number = (1, 2, 3, 4, 5, 6, 7, 8, 9);

var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "`", "{", "|", "}", "~"];

// creates random element for each array
var lowercasePointer = Math.floor(Math.random()*lowercase.length);
lowercase = lowercase[lowercasePointer]

var uppercasePointer = Math.floor(Math.random()*uppercase.length);
uppercase = uppercase[uppercasePointer]

var numberPointer = Math.floor(Math.random()*number.length);
number = number[numberPointer]

var characterPointer = Math.floor(Math.random()*character.length);
character = character[characterPointer]


