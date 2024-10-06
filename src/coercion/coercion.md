At the base of coercion there is what ECMA describes as Abstract Operation

In ECMAScript, a type conversion is the same as a type coercion.
[Spec](https://262.ecma-international.org/#sec-abstract-operations)

## toPrimitive

[Spec](https://262.ecma-international.org/#sec-toprimitive)

This abstract operation is used by the language to convert any
non primitive value into one, taking in an hint that clarify to
which primitive it should be made of.
For example, if we are doing a number operation, the hint will
be "number".

One key principle here is that this kind of abstract operation
are recursive, meaning that they will be called n times the
amount it requires to coerce a non primitive, in this case,
to a primitive type.

When toPrimitive receives the hint, it applies the following
operations:

1. "number": valueOf first, then toString
2. "string": toString first, then valueOf

## toString

Every time we need to do some operation on strings, we invoke
toString on any value that isn't a string for coercion.

This is full of weird cases, such as an empty array becomes an
empty string and any null or undefined value get omitted.

Lastly, -0 becomes 0.

## toNumber

Every time we need to do some numeric operations, we invoke
toNumber on any value that isn't a number for coercion.

The only weird case to be aware of is the "" becomes 0,
like null, while undefined becomes NaN.

When javascript invokes toNumber on an array or object,
valueOf gets called, but since by default it returns this,
toString gets called and we get either a toString of an
array or toString of an object.

## toBoolean

Any time we use a value that isn't a boolean in a
context where we need a boolean such as if condition,
this operation occurs.
It basically looks if the value if in the falsy map,
if so, it returns false, otherwise it returns true.
In this case it doesn't do coercion.

The falsy map is as follow:

- ""
- 0
- -0
- null
- NaN
- false
- undefined
