Spec: 4.2.1

ECMAScript objects are not class based, instead they can
be created in various ways, not only through a constructor.
Each constructor is a function that has a property named:
`prototype` that is used to implement `prototype-based inheritance and shared properties`.
Every object created by a constructor has a reference to the
constructor's prototype, meaning it can access it.
A prototype can also be linked to another prototype, leading
to what we call the `prototype chain`. On top of this chain
there is the Object.prototype in which we find methods such
as valueOf and toString.
When we try to access a property that is not directly tied
to the object itself, it is looked up to the `prototype chain`
until it is found or an error is thrown.

Unlike class-based object languages, in Javascript we can
add dynamic properties to object after they've been created
and we can also add shared properties to object that have
been created from the same constructor by adding them to
the constructor's prototype.

See the [examples](./examples.js)
