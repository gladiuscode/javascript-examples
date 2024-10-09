# Intro

In javascript, Functions are first class citizen:
they behave like objects, can be passed around
as variables values or arguments to other functions,
even returned from.

This behavior is key to features such as closures and
callbacks.

## Types

We can declare a function in 3 ways:

1. as a function declaration;
2. as a function expression;
3. as a anonymous function;

There are differences between the three,
meanly how anonymous functions handle
the this.

## Scope

The identifier of a function declaration, its name,
is attached to the parent scope, while the identifier
of a function express is attached to its own scope and
it is readonly.

Functions expressions can also be named and in this
way they are more useful for the following reasons:

1. We get a direct reference to the function itself
   that we can use in its body to access properties
   that may be helpful;
2. It is more debuggable because it is named in the
   stack trace;
3. It lift the reader from the burden of reading its
   body to understand what it does;

## Hoisting

Function declarations, just like vars, are 'hoisted',
meaning that they are moved on top of their parent scope.

This kind of behavior has been used to describe
developers why we can call functions declaration before
they are declared.

Although we can clearly say that there is no hoisting
behavior, it isn't even mentioned in the EcmaScript
Spec. In reality this behavior is possible thanks
to the Lexical Scope: variables and functions
declarations are attached to the current scope,
so variables are usable but undefined, while
functions declarations are callable and reference
their body.
