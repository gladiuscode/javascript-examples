// NaN is a kind of number that is not a valid number

var v = "hello";

// Prints NaN
console.log(Number(v));

// NaN is the only value in js that hasn't got the "identity" equality.
console.log(NaN === NaN);
// So it opposite is true
console.log(NaN !== NaN);

// In JS we have two ways to check for isNaN:

console.log(isNaN(29)); // Prints false
console.log(isNaN("hello")); // Prints true even tho "hello" isn't NaN
console.log(isNaN(NaN)); // Prints true

// As you can see, Number.isNaN doesn't return true for the "hello" case
// This is due to the fact that it doesn't do coercion like isNaN
console.log(Number.isNaN(29)); // Prints false
console.log(Number.isNaN("hello")); // Prints false
console.log(Number.isNaN(NaN)); // Prints true

console.log(typeof NaN); // Prints "number"
