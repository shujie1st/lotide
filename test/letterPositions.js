const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns {h: [0], e: [1], l: [2, 3], o: [4]} for 'hello'", () => {
    assert.deepEqual(letterPositions('hello'), {h: [0], e: [1], l: [2, 3], o: [4]});
  });
});