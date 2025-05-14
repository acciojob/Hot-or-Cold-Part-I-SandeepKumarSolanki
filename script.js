//your code here

const secretNumber = Math.floor(Math.random() * 100) + 1;

let previousGuess = null;
let previousDiff = null;

const input = document.getElementById("guess");
const response = document.getElementById("respond");
const button = document.getElementById("submitBtn");

response.innerText = ""; // Initially empty

button.addEventListener("click", () => {
  const guessValue = parseInt(input.value);

  if (isNaN(guessValue)) {
    response.innerText = "Please enter a valid number.";
    return;
  }

  const currentDiff = Math.abs(secretNumber - guessValue);

  if (guessValue === secretNumber) {
    response.innerText = "🎉 Correct! You guessed the number!";
  } else if (previousGuess === null) {
    // First guess
    response.innerText = guessValue < secretNumber ? "Guess higher!" : "Guess lower!";
  } else {
    // Second or later guesses
    const hotterOrColder = currentDiff < previousDiff ? "Getting hotter" : "Getting colder";
    const direction = guessValue < secretNumber ? "Guess higher!" : "Guess lower!";
    response.innerText = `${hotterOrColder}, ${direction}`;
  }

  // Update previous guess state
  previousGuess = guessValue;
  previousDiff = currentDiff;

  input.value = ""; // Clear input
});
