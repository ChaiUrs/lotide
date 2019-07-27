
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

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["hello", "lighthouse", "labs"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
  
const results1 = map(words, word => word[0]); 
//original array = words
//callback = function == creates a new array "results1" without affecting the original array "words"
console.log(results1);
console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));

const results2 = map(words2, word1 => word1[2]);
console.log(results2);
assertArraysEqual(results2, ['e', 'i', 'a']);


/* NOTE : the map() method does not make any changes to the array you're mapping.
But, it creates a new array with the changes made. 
So in order to access the new array that you got from map(),
you need to assign the mapped array to a new variable say, newDays like this:

example:
const coffee_words = ["house", "blend", "roast"];
coffee_words.map(function(coffee_element) {
  console.log(coffee_element[0]);
});

const coffee_words = ["house", "blend", "roast"];
coffee_words.forEach((coffee_element) => {
  console.log(coffee_element[4]);
});

/* //to remember//
forEach() - affects and changes our original Array.
map() - returns an entirely new Array, thus leaving the original array unchanged.
*/