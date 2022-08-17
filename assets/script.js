// Assignment code here
// var generateBtn = document.querySelector("#generate");
// alert('This is working')



var numbersArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];
console.log(numbersArray);


var lowerCaseAlp = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"
];
console.log(lowerCaseAlp);
var upperCaseAlp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
]
console.log(upperCaseAlp)
var specialCar = ["!","@","#","$","%","^","&","*",")","("
]
console.log(specialCar)

var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var passwordLength = parseInt (prompt('Choose password length'));
 
    if(!passwordLength) {
        alert ('you must enter a number between 8-128');
        
    } else if (passwordLength < 8 || passwordLength > 128) {
        alert('you must enter a number between 8-128');
        return null;
    } else {
        var confirmNumber = confirm('Would you like to include numbers in your password?');
        var confirmLowCase = confirm('Would you like a lowercase letter ?');
        var confirmUpCase = confirm('Would you like an uppercase letter ?');
        var confirmSpecialCar = confirm('Would you like a special character?');
    } 
    if(confirmNumber === false && confirmLowCase === false && confirmUpCase === false && confirmSpecialCar === false){
        choices= alert('you must select atleast one character');
        return null;
    }
    else if (confirmNumber && confirmLowCase && confirmUpCase && confirmSpecialCar) {
        choices= numbersArray.concat(lowerCaseAlp, specialCar, upperCaseAlp); 
    }
    else if(confirmNumber && confirmLowCase && confirmUpCase){
        choices= numbersArray.concat(lowerCaseAlp, upperCaseAlp)
    }
    else if(confirmNumber && confirmLowCase) {
        choices=numbersArray.concat(lowerCaseAlp)
    }
    else if(confirmSpecialCar && confirmLowCase & confirmUpCase) {
        choices= specialCar.concat(lowerCaseAlp,upperCaseAlp )
    }
    else if(confirmSpecialCar && confirmLowCase) {
        choices= specialCar.concat(lowerCaseAlp)
    }
    else if(confirmLowCase && confirmUpCase) {
        choices = lowerCaseAlp.concat(upperCaseAlp)
    };

    var password=[];
    for(var i = 0; i < passwordLength; i++ ) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices)
    }
    var passW = password.join('');
    writePassword(passW);
    return passW;
    }
    function writePassword(passW){
        document.getElementById('password') .textContent=passW;
    }
    generateBtn.addEventListener('click', function() {
        passW = generatePassword();
        document.getElementById('password') .placeholder = passW; 
    }); 








// Get references to the #generate element


// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);