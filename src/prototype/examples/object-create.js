// We can also programmatically assign a prototype
// to an object

function Person() {}

Person.prototype.sayHi = function () {
  console.log("My name is: ", this.name);
};

var me = Object.create(Person.prototype, {
  name: {
    value: "Gladius",
  },
});

console.log(me.name);

// Or we can make that object without a prototype

var maria = Object.create(null);

// This would not work because maria isn't linked to main Object.prototype
// console.log(maria.toString());
