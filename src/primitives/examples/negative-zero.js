var v = -0;

// It is equal to itself likely
console.log("-0 is equal to itself: ", v === -0);
// But it is equal to 0 too..
console.log("-0 is equal to 0 too..0: ", v === 0);
// It is also neither less or greater than 0
console.log("-0 is neither less or greate than 0: ", v > 0, v < 0);

// This actually strips -
console.log(v.toString());

// The only way to check for true equality is
// using Object.is

// Prints false
console.log(Object.is(v, 0));
// Prints true
console.log(Object.is(v, -0));
