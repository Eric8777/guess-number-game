// Random number between 0 and 1
const randomNum = Math.random();

// Random integer between 0 and 10
const randomInt = Math.floor(Math.random() * 11);

// Random integer between 1 and 100
const randomInt1to100 = Math.floor(Math.random() * 100) + 1;

// Random number between a min and max value
const min = 10;
const max = 50;
const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;

// ========== GUESSING GAME ==========
function playGuessingGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  let guessed = false;

  while (!guessed) {
    const userGuess = prompt("Guess a number between 1 and 100:");
    
    if (userGuess === null) {
      alert("Game cancelled!");
      break;
    }

    const guess = parseInt(userGuess);

    if (isNaN(guess)) {
      alert("Please enter a valid number!");
      continue;
    }

    attempts++;

    if (guess === secretNumber) {
      alert(`🎉 Correct! The number was ${secretNumber}.\nAttempts: ${attempts}`);
      guessed = true;
    } else if (guess < secretNumber) {
      alert(`Too low! Try a higher number.`);
    } else {
      alert(`Too high! Try a lower number.`);
    }
  }
}

// Start the game
playGuessingGame();