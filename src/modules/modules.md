## The beginning

At first, Javascript developers needed to find
a way to encapsulate data and expose only a subset
of methods that operate on said private data: this
was needed and is still needed by libraries and
more.

## Module pattern

To do so, they started using the module pattern,
a pattern in which we leverage closures to hide
private data and implementations and expose only
a minimum set of APIs to work with that data from
an outer scope.

This pattern is based either on IIFE, called
revealing pattern, or a factory function that
can produce multiple instances.

## CommonJS and ESM

Todo...
