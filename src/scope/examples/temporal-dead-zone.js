{
  console.log("name: ", name); // Reference error

  // let are "hoisted", but they don't get initialized
  // to undefined like var
  let name = "Gladius";
}

// This would not fix the issue on line 2
// because let hoist, so they take precedence
// in the scope chain.
var name = "Gladius";
