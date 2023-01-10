function generatePassword(maxLength = 64) {
  const length = Math.floor(Math.random() * (maxLength - 10 + 1)) + 10;
  let password = '';
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@%+\\/!#$^?:,)(}{][~-_.';

  for (let i = 0; i < length; i++) {
    const character = characters[Math.floor(Math.random() * characters.length)];
    password += character;
  }

  return password;
}
const password = generatePassword();

let newPassword = generatePassword();
console.log(newPassword); // Outputs a new random password


document.getElementById("generate-btn").addEventListener("click", function() {
  let password = generatePassword();
  document.getElementById("password-input").value = password;
});
