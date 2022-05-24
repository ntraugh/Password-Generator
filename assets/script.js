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

  var lower = prompt("Would you like lowercase letters? Yes or No") // if else for lowercase
  var choiceLower = lower.toLowerCase(); // converted choice to lowercase, if answer is not YES, Yes, or yes, the else statement will go into effect.
  console.log(choiceLower)
  if(choiceLower === "yes"){
    alert("We will add lowercase letters to your password.");
    choiceLower = true; // setting variable to a boolean for later comparison
  } else{
    alert("No lowercase letters will be added.");
    choiceLower = false;
  }
 

  var upper = prompt("Would you like uppercase letters? Yes or No")  // if else for uppercase
  var choiceUpper = upper.toLowerCase(); // converted choice to lowercase, if answer is not YES, Yes, or yes, the else statement will go into effect.
  console.log(choiceUpper)
  if(choiceUpper === "yes"){
    alert("We will add uppercase letters to your password.");
    choiceUpper = true;
  } else{
    alert("No uppercase letters will be added.");
    choiceUpper = false;
  }

  var number = prompt("Would you like numbers? Yes or No") // if else for numbers
  var choiceNumber = number.toLowerCase(); // converted choice to lowercase, if answer is not YES, Yes, or yes, the else statement will go into effect.
  console.log(choiceNumber)
  if(choiceNumber === "yes"){
    alert("We will add numbers to your password.");
    choiceNumber = true;
  } else{
    alert("No numbers will be added.");
    choiceNumber = false;
  }

  var special = prompt("Would you like special symbols? Yes or No") // if else for special characters
  var choiceSpecial = special.toLowerCase(); // converted choice to lowercase, if answer is not YES, Yes, or yes, the else statement will go into effect.
  console.log(choiceSpecial)
  if(choiceSpecial === "yes"){
    alert("We will add special characters to your password.");
    choiceSpecial = true
  } else{
    alert("No special characters will be added.");
    choiceSpecial = false
  }

  console.log(choiceLower)

  // comparing our values to see which data types to add to the password




  
  

  return ""; // Placeholder
}


// Write password to the #password input
function writePassword() {
  generatePassword() // when the button is clicked we run the generate password function
  var password = '';
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

