/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
let treasureNumber = Math.floor(Math.random() * 100) + 1;  
let attempts = 6;  
  
document.getElementById("guess-btn").addEventListener("click", checkGuess);  
  
function checkGuess() {  
   let guess = parseInt(document.getElementById("guess-input").value);  
   let hint = document.getElementById("hint");  
   let attemptsRemaining = document.getElementById("attempts");  
   let result = document.getElementById("result");  
  
   if (guess < 1 || guess > 100) {  
      hint.innerText = "Please enter a number between 1 and 100.";  
      return;  
   }  
  
   attempts--;  
   attemptsRemaining.innerText = attempts;  
  
   if (guess === treasureNumber) {  
      result.innerText = " Congratulations! You found the treasure!";  
      document.getElementById("guess-btn").disabled = true;  
   } else if (attempts === 0) {  
      result.innerText = "Game over! The treasure number was " + treasureNumber;  
      document.getElementById("guess-btn").disabled = true;  
   } else if (guess < treasureNumber) {  
      hint.innerText = "Your guess is too low. Try a higher number.";  
   } else {  
      hint.innerText = "Your guess is too high. Try a lower number.";  
   }  
  
   document.getElementById("guess-input").value = "";  
}
