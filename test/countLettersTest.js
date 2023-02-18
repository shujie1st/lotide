const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns {a: 2, s: 1, u: 1, n: 2, y: 2, d:1} for 'a sunny day'", () => {
    assert.deepEqual(countLetters('a sunny day'), {a: 2, s: 1, u: 1, n: 2, y: 2, d:1});
  });
});