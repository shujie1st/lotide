const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true for shirtObject and anotherShirtObject", () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
  it("returns false for shirtObject and longSleeveShirtObject", () => {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });
  it("returns true for multiColorShirtObject and anotherMultiColorShirtObject", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });
  it("returns false for multiColorShirtObject and longSleeveMultiColorShirtObject", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
    assert.strictEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });
  it("returns true for object01 and object02", () => {
    const object01 = { a: { z: 1 }, b: null };
    const object02 = { a: { z: 1 }, b: null };
    assert.strictEqual(eqObjects(object01, object02), true);
  });
  it("returns false for object03 and object04", () => {
    const object03 = { a: { y: 0, z: 1 }, b: 2 };
    const object04 = { a: { z: 1 }, b: 2 };
    assert.strictEqual(eqObjects(object03, object04), false);
  });
  it("returns true for object05 and object06", () => {
    const object05 = { a: { y: 0, z: 1 }, b: 2 };
    const object06 = { a: { y: 0, z: 1 }, b: 2 };
    assert.strictEqual(eqObjects(object05, object06), true);
  });
  it("returns false for object07 and object08", () => {
    const object07 = { a: { 0: 1, 1: 2 }, b: 2 };
    const object08 = { a: [1, 2], b: 2 };
    assert.strictEqual(eqObjects(object07, object08), false);
  });
});


