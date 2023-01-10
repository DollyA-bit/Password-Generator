// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowercase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var uppercase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function generatePassword() {
    // Prompt user for password length
    var length = prompt("Enter the desired length of the password (between 10 and 64 characters):");
    
    // Validate password length
    while (length < 10 || length > 64) {
      alert("Error: password must be between 10 and 64 characters.");
      length = prompt("Enter the desired length of the password (between 10 and 64 characters):");
    }
    
    // Prompt user for character types to include in password
    var lowercase = confirm("Include lowercase characters in the password?");
    var uppercase = confirm("Include uppercase characters in the password?");
    var numeric = confirm("Include numeric characters in the password?");
    var special = confirm("Include special characters in the password?");
    
    // Validate at least one character type is selected
    while (!lowercase && !uppercase && !numeric && !special) {
      alert("Error: must select at least one character type.");
      lowercase = confirm("Include lowercase characters in the password?");
      uppercase = confirm("Include uppercase characters in the password?");
      numeric = confirm("Include numeric characters in the password?");
      special = confirm("Include special characters in the password?");
    }
    
    // Generate password
    var password = "";
    var characterSet = "";
    if (lowercase) characterSet += "abcdefghijklmnopqrstuvwxyz";
    if (uppercase) characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numeric) characterSet += "0123456789";
    if (special) characterSet += "!@#$%^&*";
    
    for (var i = 0; i < length; i++) {
      password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }
    
    // Display password
    alert(`Your password is: ${password}`);
    var button = document.getElementById("button");
    button.addEventListener("click", generatePassword);
  }
