/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : ${actual} !== ${expected}`);
  }
}; */

// const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array === []) {
    return undefined;
  } else {
    return array[0];
  }
};
const array = [22, 2, 88];
console.log(head(array));

module.exports = head;
