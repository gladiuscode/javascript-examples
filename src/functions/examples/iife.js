var name = "Gladius";

// This code is perfectly valid
(console.log(name)); // Prints Gladius

// So is this
(function kindaPrivate() {
    var surname = "Code";
    console.log(surname);
})(); // this last set of () is used to call the function

(function kindaPrivate(value) {
    console.log(value);
})("Code"); // this last set of () is used to call the function

// it can also be used to wrap
// statements such as the try and catch
// and return the value to a variable
var fullName = (function getFullName() {
    try {
        // some code that could fail..
        return `${name}Code`;
    } catch(error) {
        return error.message;
    }
})();
console.log("fullName: ", fullName);