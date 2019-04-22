const fs = require("fs");

//write out data
function done(output){
  process.stdout.write(output);
  process.stdout.write('\nprompt');
}

//where we will store our terminalCommands
function evaluateCmd(userInput) {
  //parses the user input to understand which command was typed
  const userInputArray = userInput.split(" ");
  const command = userInputArray[0];
  switch (command) {
    case "echo":
    //we will add the functionality of echo within the object commandLibrary
      commandLibrary.echo(userInputArray.slice(1).join(" "));
      break;
    case "cat":
      commandLibrary.cat(userInputArray.slice(1));
      break;

    case "head":
      commandLibrary.head(userInputArray.slice(1));
      break;

    case "tail":
      commandLibrary.tail(userInputArray.slice(1));
      break;

    default:
      process.stdout.write('Command is wrong, try again');
  }
}

//where we will store the logic of our commands
const commandLibrary = {
  //the echo command
  "echo": function(userInput) {
    done(userInput);
  },
  //the cat command
  "cat": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;
      done(data);
    });
  },

  "head": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;
      var text = data.toString('utf8')
      var slicedText = text.split('\n').slice(0,10).join('/n');
      var bufferText = Buffer.from(slicedText, 'utf8');
      done(bufferText);

    })

  },

  "tail": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
        if (err) throw err;
        var text = data.toString('utf8');
        var slicedText = text.split('\n').slice(-10).join('\n');
        var bufferText = Buffer.from(slicedText, 'utf8');
        done(bufferText);




    })

  }
};

module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;
