//////////////////////////////
//
//      GLOBAL SCOPE [START]
//

var name = "Gladius";

function say() {
  //////////////////////////////
  //
  //      SAY SCOPE [START]
  //

  // name is a variable defined in the global scope
  // therefore say's execution context can access it
  // through the scope chain.
  console.log(name);

  //
  //      SAY SCOPE [END]
  //
  //////////////////////////////
}

say();

//
//      GLOBAL SCOPE [END]
//
//////////////////////////////

/**
 * During parsing, Javascript goes through the code and
 * creates all the scopes:
 * 1. Global Scope: the main scope in which two
 * identifiers get defined: "name" and "say";
 * 2. Say Scope: the function's scope;
 *
 * During runtime, instead, it goes through the code
 * and references the created scopes to execute all
 * instructions properly.
 * It performs a "look up" operation to find all
 * identifiers when needed:
 *
 * 1. name is an identifier registered in the global
 * scope and is used as a target position to
 * hold a value in memory;
 * 2. say is an identifier registered in the global
 * scope and is used as a source position, it is a
 * function in memory so it gets executed;
 * 3. inside say's execution context, we've got name
 * that name, this time as a source position.
 * Javascript first look into say's scope, since
 * it doesn't find it, it goes up one level,
 * into the global scope and there we have it,
 * so it retrieves its value from memory to
 * be used in the console.log statement;
 */
