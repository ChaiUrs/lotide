
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : ${actual} !== ${expected}`);
  }
};

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