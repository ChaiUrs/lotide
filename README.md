# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @chai_urs/lotide`

**Require it:**

`const _ = require('@chai_urs/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

countLetters: Given a string of letters, returns an object with the number of occurrences for each.
countOnly: Given an object and a list of values, returns the number of occurrences of each.
eqArrays: Tests if two arrays are the same.
eqObjects: Tests if two objects are the same.
findKey: Given an object and a callback, returns the key associated with it.
findKeyByValue: Given an object and a value, returns the key associated with it.
flatten: Given an a nested array, returns a flat array of the same elements.
head: Given an array, returns the first element.
letterPositions: Given a string, returns an object with an array of positions for each.
map: Given an array and a callback function will return an array with the callback applied.
middle: Return the middle element of an array. If the array is even, it will return both middle ones.
tail: Returns the last element of an array.
takeUntil: Given an array and a callback function will return all elements up to a match.
without: Given an array and an exclusion list, returns a new array without excluded elements.

