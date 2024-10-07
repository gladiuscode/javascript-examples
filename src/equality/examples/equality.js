// The == actually behaves just like ===
// when the types match

var lucaAge = 10;
var marcoAge = 10;

console.log("lucaAge == marcoAge: true", lucaAge == marcoAge);
console.log("lucaAge === marcoAge: true", lucaAge === marcoAge);

// Here we change the value type to string
marcoAge = "10";

console.log("lucaAge == marcoAge: true", lucaAge == marcoAge);
console.log("lucaAge === marcoAge: false", lucaAge === marcoAge);

// They behave the same when we check non primitives
var lucaObject = { name: "Luca" };
var sameLucaObject = { name: "Luca" };

console.log(
  "lucaObject == sameLucaObject: false",
  lucaObject == sameLucaObject
);
console.log(
  "lucaObject === sameLucaObject: false",
  lucaObject === sameLucaObject
);

sameLucaObject = lucaObject;

console.log("lucaObject == sameLucaObject: true", lucaObject == sameLucaObject);
console.log(
  "lucaObject === sameLucaObject: true",
  lucaObject === sameLucaObject
);
