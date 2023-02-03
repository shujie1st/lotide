const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// Use assertArraysEqual function to test map function
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
const numbers = [1, 2, 3, 4, 5];
assertArraysEqual(map(numbers, number => number * 2), [2, 4, 6, 8, 10]);

// TEST CASE 2
const colors = ["red", "blue", "green", "yellow", "white"];
assertArraysEqual(map(colors, color => color.length), [3, 4, 5, 6, 5]);

// TEST CASE 3
const cities = ["Ottawa", "Toronto", "Vancouver", "Montreal", "Calgary"];
assertArraysEqual(map(cities, city => city[0]), ["O", "T", "V", "M", "C"]);
