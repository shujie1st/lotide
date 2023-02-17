const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
    
  for (const key of Object.keys(object1)) {
    if ((Array.isArray(object1[key]) && Array.isArray(object2[key]))) {
      // If both values are arrays and they are equal
      // Then continue to the next property for comparison
      if (eqArrays(object1[key], object2[key])) {
        continue;
      } else {
        return false;
      }
    } else if (typeof object1[key] === 'object' && !Array.isArray(object1[key]) && object1[key] !== null
            && typeof object2[key] === 'object' && !Array.isArray(object2[key]) && object2[key] !== null) {
      // If both values are objects and they are equal
      // Then continue to the next property for comparison
      // As typeof array/null also return object, check both values are not array/null
      if (eqObjects(object1[key], object2[key])) {
        continue;
      } else {
        return false;
      }
    } else if (object1[key] === object2[key]) {
      // If both values are strictly equal
      // Then continue to the next property for comparison
      continue;
    }
    return false;
  }
  return true;
};


// TEST CODE
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

const object01 = { a: { z: 1 }, b: null };
const object02 = { a: { z: 1 }, b: null };
eqObjects(object01, object02);
assertEqual(eqObjects(object01, object02), true);


const object03 = { a: { y: 0, z: 1 }, b: 2 };
const object04 = { a: { z: 1 }, b: 2 };
eqObjects(object03, object04);
assertEqual(eqObjects(object03, object04), false);


const object05 = { a: { y: 0, z: 1 }, b: 2 };
const object06 = { a: { y: 0, z: 1 }, b: 2 };
eqObjects(object05, object06);
assertEqual(eqObjects(object05, object06), true);

const object07 = { a: { 0: 1, 1: 2 }, b: 2 };
const object08 = { a: [1, 2], b: 2 };
eqObjects(object07, object08);
assertEqual(eqObjects(object07, object08), false);



module.exports = eqObjects;