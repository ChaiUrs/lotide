
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

describe("#middle", () => {
  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});