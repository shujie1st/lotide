const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [6, 7, 8, 9] for [5, 6, 7, 8, 9]", () => {
    assert.deepEqual(tail([5, 6, 7, 8, 9]), [6, 7, 8, 9]);
  });
  it("returns [] for ['Hello']", () => {
    assert.deepEqual(tail(['Hello']), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("the tail function did not modify the original array [1, 2, 3]", () => {
    let array = [1, 2, 3];
    tail(array);
    assert.deepEqual(array, [1, 2, 3]);
  });
});
