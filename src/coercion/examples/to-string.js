// On primitive values it behaves well
console.log("toString(null): ", null);
console.log("toString(undefined): ", undefined);
console.log("toString(true): ", true);
console.log("toString(false): ", false);
console.log("toString(3.4): ", 3.4);
console.log("toString(0): ", 0);

// A part from -0 that returns 0
console.log("toString(-0)): ", String(-0));

// Arrays have a default toString that strip
// the brackets and empty values

console.log("toString([ ])", [].toString());
console.log("toString([ 1, 2, 3 ])", [1, 2, 3].toString());
console.log("toString([ null, undefined ])", [null, undefined].toString());
console.log("toString([ [], [], [] ])", [[], [], []].toString());
console.log("toString([ , , ,])", [, , ,].toString());

// Objects have a default toString that
// returns [object Object]

console.log("toString({})", {}.toString());
console.log("toString({ name: 'Gladius' })", { name: "Gladius" }.toString());

// We can override toString to make it helpful in the context of debugging

var myArray = [1, 2, 3];
myArray.toString = function toString() {
  var values = [...this.values()];
  return `[${values}]`;
};
console.log(myArray.toString());

var myObject = { name: "Gladius" };
myObject.toString = function toString() {
  return JSON.stringify(this);
};
console.log(myObject.toString());
