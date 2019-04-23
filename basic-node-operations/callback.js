function generateGreeting(name, callback){
  var myGreeting = "Hello " + name;
  callback(myGreeting);
}

function printGreeting(name){
  console.log(name);
}

generateGreeting("Katie", printGreeting);
