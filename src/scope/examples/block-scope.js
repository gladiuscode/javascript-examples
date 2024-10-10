{
  let name = "Gladius";
  console.log(name);
}

// console.log(name) // Reference Error

var shouldRun = true;
if (shouldRun) {
  // since we used let in the if block
  // now we declared a block scope
  let name = "Gladius";
  console.log(name);
}
