/*
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed : ${actual} !== ${expected}`);
  }
};

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
*/

const letterPositions = function(string) {
  let output = {};
  let words = string.split(' ').join('');
  for (let i in words) {
    if (output[words[i]]) {
      output[words[i]].push(i);
    } else {
      output[words[i]] = [i];
    }
  }
  return output;
};

module.exports = letterPositions;
