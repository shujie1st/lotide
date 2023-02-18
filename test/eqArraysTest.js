const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for [[1, 2, 3] and [3, 2, 1]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("returns true for ['1', '2', '3'] and ['1', '2', '3']", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });
  it("returns false for ['1', '2', '3'] and ['1', '2', 3]", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
  });
  it("returns false for [1, 2, 3] and [1, 2, 3, 4]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
  });
  it("returns true for [] and []", () => {
    assert.strictEqual(eqArrays([], []), true);
  });
  it("returns true for [[2, 3], [4]] and [[2, 3], [4]]", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it("returns false for [[2, 3], [4]] and [[2, 3], [4, 5]]", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
  it("returns false for [[2, 3], [4]] and [[2, 3], 4]", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
  it("returns true for [[2, [4, 5], 3], [4]] and [[2, [4, 5], 3], [4]]", () => {
    assert.strictEqual(eqArrays([[2, [4, 5], 3], [4]],[[2, [4, 5], 3], [4]]), true);
  });
  it("returns false for [[2, [4, 5, 6], 3], [4]] and [[2, [4, 5], 3], [4]]", () => {
    assert.strictEqual(eqArrays([[2, [4, 5, 6], 3], [4]],[[2, [4, 5], 3], [4]]), false);
  });
});