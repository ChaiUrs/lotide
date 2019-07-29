
const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1,2,3,4,5,6]);
