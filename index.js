// Generate random numbers for both dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Dice 1: Range 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Dice 2: Range 1-6

// Create paths to the corresponding dice images
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; // Path for Dice 1
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; // Path for Dice 2

// Update the <img> elements for Player 1 and Player 2
document.querySelector(".img1").setAttribute("src", randomDiceImage1);
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

// Determine the winner and update the <h1> element
var title = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  title.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  title.innerHTML = "Player 2 Wins! 🚩";
} else {
  title.innerHTML = "It's a Draw!";
}
