# Intro

> A closure is a mechanism that exists in Javascript
> that allows functions to remember the lexical
> scope they are declared into, even when they
> are executed outside that lexical scope.

This mechanism is so powerful that its the foundation
of many features such as higher order functions,
currying and functional programming in general.

It exists through the Lexical Scoping, it is based on
this kind of scoping.

## For

This statement behaves differently given the kind of
variable declaration we choose to use:

1. With `var`, since it is function scoped, the variable
   itself is attached to the parent scope (either function or
   global);
2. With let, since it is block scoped, the variable itself
   is attached to the for block and is created anew for each
   iteration;

This difference is what makes closures behave differently too.
When we use var, all closures refer to the same variable, so
they share the same value, while with let, all closure get a
unique variable tied to the current iteration.
