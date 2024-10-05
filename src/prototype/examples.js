// We create a new constructor called Person
function Person(name) {
  this.name = name;
}
// We add a new method: `sayHi` to Person's prototype
Person.prototype.sayHi = function sayHi() {
  console.log("My name is: ", this.name);
};

// Prints { sayHi: f }
console.log("Person has a prototype: ", Person.prototype);

// We instantiate a new object from Person
var me = new Person("Gladius");

// Prints "My name is Gladius"
me.sayHi();

// All objects have got a property called `constructor`
// that equals the constructor used to instantiate them.
console.log(
  "I've got a constructor property that equals Person:",
  me.constructor == Person
);

// They've also got a prototype that we can access
// through Object.getPrototypeOf or __proto__ (deprecated)
var mePrototype = Object.getPrototypeOf(me);
console.log("And a prototype: ", mePrototype);

// This prototype matches the constructor's prototype
console.log(
  "that equals Person's prototype: ",
  mePrototype == Person.prototype
);

// So since it matches, Javascript is able to share
// properties and methods across multiple objects
// without copying them to all objects

// We create a new object from the same constructor
var marco = new Person("Marco");

// Prints "My name is Marco"
marco.sayHi();

// We create a new method to the Person's prototype
Person.prototype.updateAge = function (age) {
  this.age = age;
};

// And we can access it even after me and marco
// have been created.

me.updateAge(24);
marco.updateAge(22);

console.log("My age is: ", me.age);
console.log("My age is: ", marco.age);
