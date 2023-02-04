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

// Use assertArraysEqual function to test takeUntil function
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