
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
    if (array1 [i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(string) {
  let output_letter_positions = {};
  let words = string.split(' ').join('');
  for (let i = 0; i < words.length; i++) {
    if (output_letter_positions[words[i]]) {
      output_letter_positions[words[i]].push(i);
    } else {
      output_letter_positions[words[i]] = [i];
    }
  }
  return output_letter_positions;
}
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);
