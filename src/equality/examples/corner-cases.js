var myArray = [];
var otherArray = [];

// This kind of check doesn't make any sense, but we can
// explain why Javascript reduces it to true
console.log("myArray == !otherArray: true", myArray == !otherArray);
// the !otherArray is a toBoolean operation and since [] is truthy,
// the negation of it is false
// then we've got myArray that is a non primitive, so it gets
// coerce to a primitive through toString, stripping the [] we
// obtain ""
// Now we got "" == false, the algorithm prefers numbers, so
// it applies toNumber to "" and false, meaning we now have
// 0 == 0 and that is true.

// These check shouldn't happen, we must let javascript
// invoke the toBoolean itself. It is actually
// worse to force a check like these ones, there
// are too many corner cases. Let the language
// work for you.

// this is false because double equal coerces the array
// to string and then 0, while it coerces true to 1.
// Finally 0 == 1 is false.
// Even the === wouldn't work.
console.log("myArray == true: false", myArray == true);

// this is true because double equal coerces the array
// to string and then to 0, while it coerces false to 0.
// Finally 0 == 0 is true.
// Again, even the === wouldn't work.
console.log("myArray == false: true", myArray == false);

// If we want to check if a non primitive is set, let
// javascript invoke toBoolean like so
if (myArray) {
  console.log("i'm in an if");
}
