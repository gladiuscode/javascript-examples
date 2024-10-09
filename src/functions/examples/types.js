var myHobbies = ["Gym", "Code"];

myHobbies.filter(byGymValue);

// Function expression
myHobbies.filter(function (value) {
  return value == "Gym";
});

// Named function expression
myHobbies.filter(function onlyGym(value) {
  return value == "Gym";
});

// Anonymous functions
myHobbies.filter((value) => {
  return value == "Gym";
});

// Function declaration
// note: we say they are 'hoisted'
// to the top of their scope, so
// this function is callable
// on line 4
function byGymValue(value) {
  return value == "Gym";
}
