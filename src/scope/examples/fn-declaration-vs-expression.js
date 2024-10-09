var name = "Gladius";

function sayName() {
  console.log(name);
}

var withSurname = function withSurnameImpl(value) {
  if (value == 1) {
    return;
  }

  var surname = "Code";
  console.log(`${name}${surname}`);

  // This is valid because withSurnameImpl is
  // an identifier attached to withSurnameImpl's scope.
  withSurnameImpl(1);
};

sayName(); // Prints Gladius
withSurname(); // Prints GladiusCode
withSurnameImpl(); // ReferenceError
