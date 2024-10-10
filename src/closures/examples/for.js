// This examples is often used during code
// interviews to understand the knowledge
// level of the candidate, because it
// demonstrates lexical scoping and
// closure.

// This kind of for with a var declaration
// will always print the last index value.
// Even with 0 as the ms argument.
// This is due to how var behaves and
// the event loop.
// The var keyword declares a function scope
// variable and all 3 setTimeouts will
// always be executed after the main
// execution context is done.
// This means that since var is not scoped
// to the for itself and all sayIAfterOneSec
// will access the var value after the code
// execution, if the var value changes, then
// the functions will read its latest value.
for (var index = 0; index < 3; index++) {
  setTimeout(function sayIAfterOneSec() {
    console.log("index: ", index);
  }, 1000);
}

// If we declare the index to be let instead,
// the let declaration "transforms" the for
// block into a scope, meaning that all
// sayIAfterOneSec functions will get
// a reference to the index variable
// of the current loop iteration, because
// a new variable gets created for each loop.
// So 3 closures occur, one for each function
// that closes over the index variable of the
// current loop, thus printing different values.
for (let index = 0; index < 3; index++) {
  setTimeout(function sayIAfterOneSec() {
    console.log("index: ", index);
  }, 1000);
}
