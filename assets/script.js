// Assignment code
var generateBtn = document.getElementById("generate");
// Instructor provided
function generatePassword(){
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var characters = "#$%&()*+,-./:;<=>?"

  var input = parseInt(prompt("Choose a number between 8 and 128 characters.")) // parseINT turns the answer into an integer (full number)

  if(input >= 8 && input <= 128){
    // need code in here

  }else{
    alert("Pick a number between 8 and 128")
  }

  return ""; // Placeholder
}


// Write password to the #password input
function writePassword() {
  var password = '';
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
