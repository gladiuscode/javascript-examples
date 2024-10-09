//////////////////////////////
//
//      GLOBAL SCOPE [START]
//

var name = "Gladius";

function sayName() {
  //////////////////////////////
  //
  //      SAY NAME SCOPE [START]
  //

  var surname = "Code";

  function withSurname() {
    //////////////////////////////
    //
    //      WITH SURNAME SCOPE [START]
    //

    // This scope can access all
    // surrounding variables through
    // the scope chain that gets
    // built up by the lexical scope
    // mechanism during parse time.

    console.log(`${name}${surname}`); // Prints GladiusCode

    //
    //      WITH SURNAME SCOPE [END]
    //
    //////////////////////////////
  }

  withSurname();

  //
  //      SAY NAME SCOPE [END]
  //
  //////////////////////////////
}

sayName();

//
//      GLOBAL SCOPE [END]
//
//////////////////////////////
