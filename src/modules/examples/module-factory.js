function Module(name) {
  var kind = "human";

  var publicAPI = { say, getKind };
  return publicAPI;

  function say(text) {
    console.log(`${name}: ${text}`);
  }

  function getKind() {
    return kind;
  }
}

// The main difference with the revealing pattern
// is that we can create multiple instances.
var person = Module("Gladiuscode");

person.say("loves to code"); // Prints Gladius: loves to code
console.log(person.getKind()); // Prints human
