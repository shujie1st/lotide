const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(inputArray) {
  let flattenedArray = [];
  for (const element of inputArray) {
    if (Array.isArray(element)) {
      for (const item of element) {
        flattenedArray.push(item);
      }
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};

// TEST CODE
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([["hello", 5], 15, ["light", "house", "labs"]]), ["hello", 5, 15, "light", "house", "labs"]);


module.exports = flatten;