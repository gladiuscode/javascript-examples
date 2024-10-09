# Definition

> The domain in which we can access entities,
> may them be variables or functions.

## Lexical Scope

In Javascript the scope is Lexical, meaning
that it is set up and determined at compile
time.
Variables are defined either as a target
or a source, meaning that they get assigned
a value or are used to retrieved one from.

How javascript sets up scope makes it a
parsed language, not an interpreted one.

There are two units of scope: functions
and blocks. They are created while Javascript
parses the code.

## Scope Chain

In Javascript we talk about the scope
chain every time we refer to multiple
scopes nested into each other.
The key takeaway here is that they are
linked: the function or block has
access to the outer scope and the
parent's one all the way up to the global.

## Parsing pass

During this pass, Javascript creates all
the required scopes, each function gets
its own scope, as well as all blocks with
let and const declared inside of them.

Key difference to know about functions
is: function declarations are attached
to the parent scope, while function
expressions are attached to their own
scope. This is why we can't use the
function express name in the same
parent scope, we need to call the
variable that hold its reference.

## Runtime pass

During this pass, Javascript executes all
instructions, line by line, using the scope
manager as reference to properly handle
all identifiers it encounters.

Each identifier is looked up from the
innermost scope all the way up to the global
scope.

They can either be used as targets or
sources, meaning: stored in memory with
a value or retrieve from memory and used.

## Corner case

During compilation, when Javascript
encounters a variable as target that
isn't defined in the scope chain
(in any scope), meaning a variable that
hasn't been defined before, Javascript
creates one for us in the global scope.

This behavior only applies if we are not
running strict mode, otherwise it throws
a Reference Error.

> Note: it throws a Reference Error
> even when we are not in strict mode
> but we access an identifier as a
> source.
