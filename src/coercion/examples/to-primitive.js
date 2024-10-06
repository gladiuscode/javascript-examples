// The engine will call toPrimitive for us here

var me = { name: "Gladius" };
var age = 26;

// Prints 26[object Object]
console.log(age + me);
// This happens because toPrimitive tries valueOf and then toString
// and toString returns [object Object]
