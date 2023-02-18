const assert = require('chai').assert;
const without = require('../without');

describe("without", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("returns ['1','2'] for ['1', '2', '3']", () => {
    assert.deepEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
  });
  it("returns ['hello', 'hi', 'nice'] for ['hello', 'hi', 'nice']", () => {
    assert.deepEqual(without(['hello', 'hi', 'nice'], [1, 2, 'good']), ['hello', 'hi', 'nice']);
  });
  it("returns ['1', '2', '3'] for ['1', '2', '3']", () => {
    assert.deepEqual((without(['1', '2', '3'], [])), ['1', '2', '3']);
  });
  it("returns [] for []", () => {
    assert.deepEqual(without([], [1, 2, 3]), []);
  });
  it("returns ['hello', 'world', 'lighthouse'] for words", () => {
    const words = ['hello', 'world', 'lighthouse'];
    without(words, ['lighthouse']);
    // no need to capture return value for this test case
    // Make sure the original array was not altered by the without function
    assert.deepEqual((words), ['hello', 'world', 'lighthouse']);
  });
});


