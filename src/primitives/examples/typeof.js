var v;
// Prints "undefined"
console.log(typeof v);

v = "1";
// Prints "string"
console.log(typeof v);

v = 1;
// Prints "number"
console.log(typeof v);

v = true;
// Prints "boolean"
console.log(typeof v);

v = {};
// Prints "object"
console.log(typeof v);

v = Symbol();
// Prints "symbol"
console.log(typeof v);

v = 0n;
// Prints "bigint"
console.log(typeof v);

// This one is actually a bug in javascript
v = null;
// Prints "object"
console.log(typeof v);
