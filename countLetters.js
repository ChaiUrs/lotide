
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const results = {}; 
  for (let letters of string) {
    if (letters !== ' ') {
      if (results[letters]) {
        results[letters]++;
      } else {
        results[letters] = 1;
      }
    }
  }
  return results;
}
console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("lighthouse in the house").h ,4);


/* Tried Alternate Codes
const countLetters = function(string) {
  const results = {}; 
  const letters = string.split('');
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] !== ' ') {
      if (results[letters[i]]) {
        results[letters[i]]++;
      } else {
        results[letters[i]] = 1;
      }
    }
  }
  return results;
}
console.log(countLetters("lighthouse in the house"));
*/

/*
// count letters in a string and get an object to display the letters count for each word.
const countLetters = function(string) {
  let output_letters = {}; //create an object
  let words = string.split(' ');
  for (let i = 0; i < words.length; i++) {
    output_letters[words[i]] = {}; 
    for (let j = 0; j < words[i].length; j++) {
      if (output_letters[words[i]][words[i][j]]) {
      output_letters[words[i]][words[i][j]] ++;
    } else {
      output_letters[words[i]][words[i][j]] = 1;
    }
  }
}
return output_letters;
}
console.log(countLetters("Counting Letters Here"));
assertEqual(countLetters("Hello").Hello.l, 2);
*/