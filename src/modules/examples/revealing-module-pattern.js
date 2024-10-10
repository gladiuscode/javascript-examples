// We use an IIFE to encapsulate data and
// functions that handle changes.
// This way we create a closure, even
// when the function itself is long gone,
// we have access to its public api and
// data.
var person = (function Module(name) {
  var kind = "human";

  var publicAPI = { say, getKind };
  return publicAPI;

  function say(text) {
    console.log(`${name}: ${text}`);
  }

  function getKind() {
    return kind;
  }
})("Gladius");

person.say("loves to code"); // Prints Gladius: loves to code
console.log(person.getKind()); // Prints human
