const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

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