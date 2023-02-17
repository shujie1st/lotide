const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let results = [];
  for (const item of array) {
    if (callback(item)) {
      return results;
    } else {
      results.push(item);
    }
  }
};


// TEST CASE 1
const data1 = [2, 4, 6, 8, 9, 10];
assertArraysEqual(takeUntil(data1, x => x % 2 === 1), [2, 4, 6, 8]);

// TEST CASE 2
const data2 = [2, 4, 6, 8, 9, 10];
assertArraysEqual(takeUntil(data2, x => x % 2 === 0), []);

// TEST CASE 3
const data3 = ["hello", "hi", "yes", "fly", "a", "b"];
assertArraysEqual(takeUntil(data3, x => x.length < 2), ["hello", "hi", "yes", "fly"]);

// TEST CASE 4
const data4 = ["hello", "hi", "yes", "hello", "hi", "hello"];
assertArraysEqual(takeUntil(data4, x => x[0] !== "h"), ["hello", "hi"]);


module.exports = takeUntil;