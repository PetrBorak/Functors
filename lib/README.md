# BASIC FUNCTORS AND HELPER UTILITIES
This package is meant to enable usage of support files from https://www.npmjs.com/package/@mostly-adequate/support
for usage in typescript based project of my own.

The main intention is to use the profound Functors in production.
That's mostly because hovewer there exits many functional utility packages
(like ramda asn.), I have not found similar libraries for Functors and Monads.

## Library formats
The library is build into UMD / ecma 5 and Ecma 6 + Harmony modules;

###  UMD / ecma 5 

```js
const { Maybe, liftA2, append, concat, reverse } = require('@petrborak/functors');

const a = Maybe.of("yltsoM").map(reverse);
const b = Maybe.of("Adequate").map(concat(" "));

liftA2(append)(b)(a);
// Just("Mostly Adequate")
```


###   Ecma 6 + Harmony modules

```js
import { Maybe, liftA2, append, concat, reverse } from '@petrborak/functors';

const a = Maybe.of("yltsoM").map(reverse);
const b = Maybe.of("Adequate").map(concat(" "));

liftA2(append)(b)(a);
// Just("Mostly Adequate")
```




## Types, test coverage 

Order makes friends. So to make myself comfortable with the solutions
 in the support files, I have typed it and I am also recently working on test coverage.
 
 
 
## The following is the README from original solution 

# Mostly Adequate Guide to Functional Programming - Support

## Overview 

This package contains all functions and data-structure referenced in the
appendixes of the [Mostly Adequate Guide to Functional Programming](https://github.com/MostlyAdequate/mostly-adequate-guide).

These functions have an educational purpose and aren't intended to be used in
any production environment. They are however, a good learning material for anyone
interested in functional programming.

## How to install

The package is available on `npm` and can be installed via the following incantation:

```
npm install @mostly-adequate/support
```

## How to use

There's no particular structure to the module, everything is flat and exported
from the root (the curious reader may have a quick glance at the `index.js` to
get convinced about this). 

Also, all top-level functions are curried so you don't have to worry about calling
`curry` on any of them.

For example:

```js
const { Maybe, liftA2, append, concat, reverse } = require('@mostly-adequate/support');

const a = Maybe.of("yltsoM").map(reverse);
const b = Maybe.of("Adequate").map(concat(" "));

liftA2(append)(b)(a);
// Just("Mostly Adequate")
```
