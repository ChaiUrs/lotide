/*
const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1,arr2){
  const result = eqArrays(arr1,arr2);
    if (!result){
        console.log("Array is not same as the Original!");
    }
    else {
        console.log("The original array is not altered!");
    }
}
*/

// Implement without which will return a subset of a given array, removing unwanted elements.

const without = function(source, itemsToRemove) {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      
      //console.log(itemsToRemove.includes(source[i]));
      
      /* The includes() method determines whether a string contains the characters of a specified string.
      This method returns true if the string contains the characters, and false if not. */
      
      output.push(source[i]);
    }
  }
  return output;
};
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

/*
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/