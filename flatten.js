/*
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed : ${actual} !== ${expected}`);
  }
}; */

const flatten = function(array1) {
let flattened = [];
for(let i = 0; i < array1.length; i++) {
  if (Array.isArray(array1[i])) {
  // The Array.isArray() method determines whether the passed value is an Array.

    flattened = flattened.concat(flatten(array1[i]));
  // Flattening nested arrays is equivalent to concatenating each of them to an empty array.
  
  } else {
    flattened.push(array1[i]);
  }
}
return flattened;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;


