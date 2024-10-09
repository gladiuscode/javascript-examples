var name = "Gladius";

function sayName() {
  // This variable shadows the global one
  var name = "Code";
  console.log(name); // Prints "Code"
}

{
  // The same happens in a block with let or const
  let name = "Code2";
  console.log(name); // Prints "Code"

  // Note: even var would work, but it would be
  // defined in the global scope instead.
}

sayName();
