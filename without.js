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
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

// TEST CASES
assertArraysEqual((without([1, 2, 3], [1])), [2, 3]);
assertArraysEqual((without(["1", "2", "3"], [1, 2, "3"])), ["1", "2"]);
assertArraysEqual(without(["hello", "hi", "nice"], [1, 2, "good"]), ["hello", "hi", "nice"]);
assertArraysEqual(without(["1", "2", "3"], []), ["1", "2", "3"]);
assertArraysEqual((without([], [1, 2, 3])), []);


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);



module.exports = without;