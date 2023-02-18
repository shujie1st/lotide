const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("returns [2, 4, 6, 8, 10] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(map([1, 2, 3, 4, 5], number => number * 2), [2, 4, 6, 8, 10]);
  });
  it("returns [3, 4, 5, 6, 5] for ['red', 'blue', 'green', 'yellow', 'white']", () => {
    assert.deepEqual(map(['red', 'blue', 'green', 'yellow', 'white'], color => color.length), [3, 4, 5, 6, 5]);
  });
  it("returns ['O', 'T', 'V', 'M', 'C'] for ['Ottawa', 'Toronto', 'Vancouver, 'Montreal', 'Calgary']", () => {
    assert.deepEqual(map(['Ottawa', 'Toronto', 'Vancouver', 'Montreal', 'Calgary'], city => city[0]), ['O', 'T', 'V', 'M', 'C']);
  });
  it("returns ['apple', 'bread', 'milk', 'peach', 'lettuce'] for [{name: 'apple', quantity: 4 }, {name: 'bread', quantity: 2 }, {name: 'milk', quantity: 2 }, {name: 'peach', quantity: 2 }, {name: 'lettuce', quantity: 1 }]", () => {
    assert.deepEqual(map([{name: 'apple', quantity: 4 }, {name: 'bread', quantity: 2 }, {name: 'milk', quantity: 2 }, {name: 'peach', quantity: 2 }, {name: 'lettuce', quantity: 1 }], item => item.name), ['apple', 'bread', 'milk', 'peach', 'lettuce']);
  }); 
});