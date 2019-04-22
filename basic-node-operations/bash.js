const commands = require("./commands.js");

//prompt user for input
process.stdout.write('prompt > ');

//the stdin 'data' event triggers after a user types in a line
process.stdin.on('data', (userInput) => {
  userInput = userInput.toString().trim();
  //evaluateCmd is a function which will be implemented in command.js
  commands.evaluateCmd(userInput);
});
