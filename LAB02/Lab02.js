// Load the prompt package to get input from user
const prompt = require('prompt');

// Start the prompt
prompt.start();

// Ask user to enter a value (R, P, S, full word, or number)
prompt.get(['userInput'], function (err, result) {
  if (err) {
    console.error(err);
    return;
  }

  // Read and clean the user input
  const inputRaw = result.userInput.toString().trim().toUpperCase();
  let userSelection = '';
});

// Check user input and set the user's choice
if (inputRaw === 'ROCK' || inputRaw === 'R') {
  userSelection = 'ROCK';
} else if (inputRaw === 'PAPER' || inputRaw === 'P') {
  userSelection = 'PAPER';
} else if (inputRaw === 'SCISSORS' || inputRaw === 'S') {
  userSelection = 'SCISSORS';
} else {
  // If user enters a number between 0 and 1, decide the choice
  const inputNum = parseFloat(inputRaw);
  if (!isNaN(inputNum) && inputNum >= 0 && inputNum <= 1) {
    if (inputNum <= 0.34) {
      userSelection = 'PAPER';
    } else if (inputNum <= 0.67) {
      userSelection = 'SCISSORS';
    } else {
      userSelection = 'ROCK';
    }
  } else {
    // Invalid input
    console.log("Invalid input. Please enter R, P, S, full word, or a number between 0.00 and 1.00.");
    return;
  }
}

// Generate computer's choice randomly
const randomNum = Math.random();
let computerSelection = '';
if (randomNum <= 0.34) {
  computerSelection = 'PAPER';
} else if (randomNum <= 0.67) {
  computerSelection = 'SCISSORS';
} else {
  computerSelection = 'ROCK';
}

// Show both choices
console.log(`User selected: ${userSelection}`);
console.log(`Computer selected: ${computerSelection}`);
