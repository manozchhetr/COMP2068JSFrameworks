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
