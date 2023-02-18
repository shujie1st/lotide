const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("returns [2, 4, 6, 8] for [2, 4, 6, 8, 9, 10]", () => {
    assert.deepEqual(takeUntil([2, 4, 6, 8, 9, 10], x => x % 2 === 1), [2, 4, 6, 8]);
  });
  it("returns [] for [2, 4, 6, 8, 9, 10]", () => {
    assert.deepEqual(takeUntil([2, 4, 6, 8, 9, 10], x => x % 2 === 0), []);
  });
  it("returns ['hello', 'hi', 'yes', 'fly'] for ['hello', 'hi', 'yes', 'fly', 'a', 'b']", () => {
    assert.deepEqual(takeUntil(['hello', 'hi', 'yes', 'fly', 'a', 'b'], x => x.length < 2), ['hello', 'hi', 'yes', 'fly']);
  });
  it("returns ['hello', 'hi'] for ['hello', 'hi', 'yes', 'hello', 'hi', 'hello']", () => {
    assert.deepEqual(takeUntil(['hello', 'hi', 'yes', 'hello', 'hi', 'hello'], x => x[0] !== 'h'), ['hello', 'hi']);
  });
});