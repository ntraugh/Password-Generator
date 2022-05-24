// Assignment code
var generateBtn = document.querySelector("#generate");


// Instructor provided
function generatePassword(){
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var characters = "#$%&()*+,-./:;<=>?" ;
  var possible = '';


  var input = parseInt(prompt("Choose a number between 8 and 128 characters.")) // parseINT turns the answer into an integer (full number)
  
  if(input >= 8 && input <= 128){
    alert("Your password will be " + input + " characters long"); // validating the users choice
  }
  else{
    alert("Pick a number between 8 and 128")
    return generatePassword(); // re-runs the function so the user can put in a number between the prompted characters
  }


  // if else for lowercase
  var choiceLower = confirm("Would you like lowercase letters?") 
  if(choiceLower){
    possible += lowercase
  } 
  
 

  // if else for uppercase
  var choiceUpper = confirm("Would you like uppercase letters?")  
  if(choiceUpper){
    possible += uppercase
  }


  // if else for numbers
  var choiceNumber = confirm("Would you like numbers?") 
  if(choiceNumber){
    possible += numbers
  } 
  


  // if else for special characters
  var choiceSpecial = confirm("Would you like special symbols?") 
  if(choiceSpecial){
    possible += characters
  } 
  
  console.log(possible)

  var pass = "";

  // comparing our values to see which data types to add to the password
  if(!choiceSpecial && !choiceNumber && !choiceUpper && !choiceLower){
    alert("Must contain at least one type of character"); // promting the user they need to choose at least one of the options for characters
    return generatePassword();
  }
  if(choiceSpecial && choiceNumber && choiceUpper && choiceLower){ // if all choices are picked
    for (var i = 0; i < input; i++) {
      var randPass = Math.floor(Math.random() * possible.length);
      pass += possible.charAt(randPass)
     
    }
    return pass // prints out the password onto the screen, but only characters
  }
  


  
  

 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();  // when the button is clicked we run the generate password function
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);