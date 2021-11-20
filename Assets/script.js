
// declares variables
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "`", "{", "|", "}", "~"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// declares function
function generatePassword () {

// declares blank for password and choices-which is the choices they make to create a character set combo
var choices = [];
var password = [];

// asks for password length
passwordLength = prompt("How many characters would you like your password to contain?");

// alert if password length criteria is not met
if (passwordLength <8) {
  alert ("Password must be at least 8 characters");
  return generatePassword();
}
else if (passwordLength >128) {
  alert ("Password must be less than 128 characters");
  return generatePassword();
}
else if (passwordLength === NaN) {
  alert ("Must enter a number for Password Length");
}
// asks what charcter sets the user wants to allow
useLowercase = confirm("Select OK to allow lowercase letters.");
useUppercase = confirm("Select OK to allow uppercase letters.");
useNumber = confirm("Select OK to allow numbers.");
useCharacter = confirm("Select OK to allow special characters.");

// alert if no character type is selected
if (useLowercase+useUppercase+useNumber+useCharacter === false) {
  alert ("You must allow at least 1 character type for your password.");
  return;
}

if (useLowercase) {
  var lowercasePointer = Math.floor(Math.random() * lowercase.length)
  password.push(lowercase[lowercasePointer]);

for (var i=0; i<lowercase.length; i++)  {
  choices.push(lowercase[i])
}
}

if (useUppercase) {
  var uppercasePointer = Math.floor(Math.random() * uppercase.length)
  password.push(uppercase[uppercasePointer]);
 
for (var i=0; i<uppercase.length; i++)  {
  choices.push(uppercase[i])
}
}

if (useNumber) {
  var numberPointer = Math.floor(Math.random() * number.length)
  password.push(number[numberPointer]);
    
for (var i=0; i<number.length; i++)  {
  choices.push(number[i])
}
}

if (useCharacter) {
  var characterPointer = Math.floor(Math.random() * character.length)
  password.push(character[characterPointer]);
      
for (var i=0; i<character.length; i++)  {
  choices.push(character[i])
}
}

for (var i=0; i< passwordLength; i++) {
    var random = Math.floor(Math.random() * choices.length)
    password.push(choices[random]);
}
return password.join("");
}