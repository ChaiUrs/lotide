
const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');

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
