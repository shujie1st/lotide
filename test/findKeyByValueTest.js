const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const person = {
  name: "Cindy",
  age: 25,
  client_id: 25,
  address: "105 Main Street"
};

describe("#findKeyByValue", () => {
  it("returns 'drama' for 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined for 'That '70s Show", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it("returns 'address' for '105 Main Street", () => {
    assert.strictEqual(findKeyByValue(person, "105 Main Street"), "address");
  });
  it("returns 'age' for 25", () => {
    assert.strictEqual(findKeyByValue(person, 25), "age");
  });
});
