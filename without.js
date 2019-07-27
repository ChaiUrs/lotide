
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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed : ${actual} !== ${expected}`);
  }
};

// Implement without which will return a subset of a given array, removing unwanted elements.
const without = function(source, itemsToRemove) {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      //console.log(itemsToRemove.includes(source[i]));
      output.push(source[i]);
    }
  }
  return output;
};

const result1 = without([1, 2, 3], [1]); 
console.log(result1); // => [2, 3]

const result2 = without(["1", "2", "3"], [1, 2, "3"]); 
console.log(result2); // => ["1", "2"]

const result3 = without(["hello", "world", "lighthouse"], ["lighthouse"]); 
console.log(result3); // ["hello", "world"]

assertArraysEqual(result1, [2, 3]); //pass
assertArraysEqual(result3, ["lighthouse"]); //fail


/* NOTE : The includes() method determines whether a string contains the characters of a specified string.
This method returns true if the string contains the characters, and false if not. */