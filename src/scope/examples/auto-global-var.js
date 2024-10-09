var name = "Gladius";

function sayFullName() {
  // Notice that we haven't used the var keyword
  surname = "Code";

  console.log(`${name}${surname}`);
}

sayFullName(); // Prints GladiusCode

// This line works because surname gets
// auto created by javascript on the
// global scope.
// It is in no way ever something
// that any developer should do,
// but it works when we are not in
// strict mode
console.log(surname); // Prints Code
