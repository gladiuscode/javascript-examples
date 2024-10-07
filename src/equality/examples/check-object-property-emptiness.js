// If we need to check whether a property is
// undefined or null, we can use ==, because
// as the spec says, they are interchangeable
// in this case
var me = { name: "Gladius", age: undefined };
var otherMe = {};

if (
  (me.age === null || me.age === undefined) &&
  (otherMe.age === null || otherMe.age === undefined)
) {
  console.log("Missing age");
}

if (me.age == null && otherMe.age == null) {
  console.log("Missing age");
}
