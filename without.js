const assertArraysEqual = require('./assertArraysEqual');

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