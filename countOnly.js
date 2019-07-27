
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed : ${actual} !== ${expected}`);
  }
};

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

//firstNames - an array of strings passed to allItems
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",                    
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
