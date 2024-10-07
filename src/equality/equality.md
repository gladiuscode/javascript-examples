## What is the difference?

The double `==` checks both the value and type, as the spec
points out, when the types are equal, `==` leverages `===`.

The main difference is what they do when the types do not match.
The double `==` does coercion, while the `===` doesn't.

## Double Equal

[Double Equal Spec](https://262.ecma-international.org/10.0/#sec-abstract-equality-comparison)

What's important to remember about the double equal is that
it prefers numeric coercion, meaning that if any of the
two values are different than a number, they get
coerce to a number, string, boolean and symbol.
While when we get an object, it uses the
toPrimitive that first calls valueOf and then toString
on said object.

## Triple Equal

[Triple Equal Spec](https://262.ecma-international.org/10.0/#sec-strict-equality-comparison)

In particular, the `===` actually lies for the following
cases:

1. If any value is NaN, returns false;
2. If one value is 0 and the other is -0, return false;

## What about with non primitives?

If both values are non primitives, they also behave the same,
that's because they do identity comparison, meaning that they
do not check the structure of their value, rather their
position in memory.

The double equal tho, if once of them is a primitive, instead,
coerces the non primitive to a primitive through toPrimitive.

## Conclusion

So what can we do with this information? We can write algorithms
where we do know the types of the value we actually use, we can
narrow them down, we can make sure that their types are actually
the right ones before we execute any equality or any other
comparison for that matter.

The real question to ask ourselves is: "Is coercion helpful in an
equality comparison or not?"
If we do know the types, if we know it, can we leverage double
equal to make the code easier to read?

## Tips

Avoid the == with the following scenarios:

1. When one of the value is either 0 or "" (" " too.);
2. With non-primitives, it doesn't make any sense;
3. With comparison to true or false, if you must need to check
   true or false, use the ===;
4. Don't use it when you don't know the types, it's too risky;
