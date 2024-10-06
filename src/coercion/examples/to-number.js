// This is weird
console.log("toNumber(''): ", "");

console.log("toNumber(0): ", 0);
console.log("toNumber(-0): ", -0);
console.log("toNumber(' 0009 '): ", 0009);
console.log("toNumber(3.4): ", 3.4);
console.log("toNumber(0.): ", 0);
console.log("toNumber(.0): ", 0);
console.log("toNumber(.): ", 0);

// When we need to do numeric operations
// on non primitive values, such as array
// or object, by default their valueOf
// gets called, but since it returns this
// then toString gets called and we
// unlock weird cases as you can see
// below

var myArray = [];
var myObject = {};

var n = 1;

var result = n * myArray;
console.log("1 * [] equals 0", result == 0);
// This happens because empty array (toString) becomes "" and "" (toNumber) becomes 0

myArray.push(1);
result = n * myArray;
console.log("1 * [1] equals 1", result == 1);

result = n * myObject;
console.log("1 * myObject equals NaN", Number.isNaN(result));
// This happens because any object, by default, become [object Object] through toString

// If we override valueOf method, then we can override
// this behavior

myArray.valueOf = function () {
  return 15;
};
result = n * myArray;
console.log("1 * [1] equals 15", result == 15);

myObject.valueOf = function () {
  return 20;
};
result = n * myObject;
console.log("1 * [1] equals 20", result == 20);
