
const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');


console.log(letterPositions("lighthouse in the house"));
console.log(assertArraysEqual(letterPositions("lighthouse in the house").l, ['0']));
console.log(assertArraysEqual(letterPositions("lighthouse in the house").h, ['3', '5', '13', '15']));
