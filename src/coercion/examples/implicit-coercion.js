var myNumber = 16;

// This is a case of implicit coercion
// this template literal calls toString on myNumber
// so 16 becomes "16"
var output = `My number is: ${myNumber}`;
console.log("output: ", output);

var myObject = { name: "Gladius" };

// This prints My object is: [object Object]
output = `My object is: ${myObject}`;
console.log("output: ", output);

// But if we override toString
myObject.toString = function () {
  return JSON.stringify(this);
};
output = `My object is: ${myObject}`;
console.log("output: ", output);

// Since boolean coercion only does a look up
// we can use null and undefined interchangeable
// to check if something is empty

myObject.name = undefined;

if (myObject.name == null) {
  console.log("I don't have a name");
}
