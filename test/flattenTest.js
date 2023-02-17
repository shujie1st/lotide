const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns ['hello', 5, 15, 'light', 'house', 'labs'] for [['hello', 5], 15, ['light', 'house', 'labs']]", () => {
    assert.deepEqual(flatten([['hello', 5], 15, ['light', 'house', 'labs']]), ['hello', 5, 15, 'light', 'house', 'labs']);
  });
});

