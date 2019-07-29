/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed : ${actual} !== ${expected}`);
  }
}; */

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    console.log(item); //Lopping over all the items in the array & printing them
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item]++; // Increment the count of each item into results as we encounter each string item in the array.
      } else {
        results[item] = 1; 
      } 
    } 
  }
  return results;
}

module.exports = countOnly;
