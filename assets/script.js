// Assignment code
var generateBtn = document.querySelector("#generate");
// Instructor provided
function generatePassword(){
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var characters = "#$%&()*+,-./:;<=>?"

  var input = parseInt(prompt("Choose a number between 8 and 128 characters.")) // parseINT turns the answer into an integer (full number)
  
  if(input >= 8 && input <= 128){
    alert("Your password will be " + input + " characters long"); // validating the users choice
  }
  else{
    alert("Pick a number between 8 and 128")
    return generatePassword(); // re-runs the function so the user can put in a number between the prompted characters
  }

  var lower = prompt("Would you like lowercase letters?")
  var choiceLower = lower.toLowerCase(); // converted choice to lowercase, if answer is not YES, Yes, or yes, the else statement will go into effect.
  console.log(choiceLower)
  if(choiceLower === "yes"){
    alert("We will add lowercase letters to your password.");

  }else{
    alert("No lowercase letters will be added.");

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


generatePassword();