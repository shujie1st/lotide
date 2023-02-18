const assert = require('chai').assert;
const findKey = require('../findKey');

const object1 = {
  "a": { score: 5 },
  "b": { score: 3 },
  "c": { score: 6 },
  "d": { score: 7 },
  "e": { score: 3 },
  "f": { score: 5 }
};

describe("#findKey", () => {
  it("returns 'a' for x => x.score === 5", () => {
    assert.strictEqual(findKey(object1, x => x.score === 5), "a");
  });
  it("returns 'b' for x => x.score < 4", () => {
    assert.strictEqual(findKey(object1, x => x.score < 4), "b");
  });
  it("returns undefined for x => x.score > 8", () => {
    assert.strictEqual(findKey(object1, x => x.score > 8), undefined);
  });
});