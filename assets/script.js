// Assignment code
var generateBtn = document.querySelector("#generate");


// Instructor provided
function generatePassword(){
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var characters = "#$%&()*+,-./:;<=>?" ;
  var possible = ''; // defining our possible characters string that we will use later when the user is prompted to select the characters


  var input = parseInt(prompt("Choose a number between 8 and 128 characters.")) // parseINT turns the answer into an integer (full number)
  
  if(input >= 8 && input <= 128){
    alert("Your password will be " + input + " characters long"); // validating the users choice
  }
  else{
    alert("Pick a number between 8 and 128")
    return generatePassword(); // re-runs the function so the user can put in a number between the prompted characters
  }

  // Now that we know how MANY characters we need to figure out WHICH characters to add
  // if statement for lowercase
  var choiceLower = confirm("Would you like lowercase letters?") 
  if(choiceLower){
    possible += lowercase // adding all the lowercase letters to our empty 'possible' string for later use, same below with each option. if it's false it won't be added, no need for else statement
  } 
  
  // if statement for uppercase
  var choiceUpper = confirm("Would you like uppercase letters?")  
  if(choiceUpper){
    possible += uppercase
  }

  // if statement for numbers
  var choiceNumber = confirm("Would you like numbers?") 
  if(choiceNumber){
    possible += numbers
  } 
  
  // if statement for special characters
  var choiceSpecial = confirm("Would you like special symbols?") 
  if(choiceSpecial){
    possible += characters
  } 
  
  // console.log(possible) console logged this to make sure that possible contained all the elements we were hoping for

  // creating the final password, empty string because we will add whatever is in 'possible' to it with a for loop
  var pass = ""; 

  // Checking the error condition, if they did not select an option from the four they will be re prompted to select one of the characters
  if(!choiceSpecial && !choiceNumber && !choiceUpper && !choiceLower){
    alert("Must contain at least one type of character"); // promting the user they need to choose at least one of the options for characters
    return generatePassword();
  }

  // using a for loop we loop through the 'possible' characters however many times the user selected.  the Math.floor function will give us a random number to use as an index to pick from out of 'possible' variable
  for (var i = 0; i < input; i++) {
      var randPass = Math.floor(Math.random() * possible.length);
      pass += possible.charAt(randPass) // we then add our random character from 'possible' to our empty string 'pass' we defined earlier
     
  }
  return pass // prints out the password onto the screen AFTER the for loop runs so it only gets one result
 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();  // when the button is clicked we run the generate password function
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // this runs when we click the generate password button becuase of the "click" event paired with our function inside of a function.