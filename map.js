const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
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

// TEST CASE4
const shoppinglist = [{name: "apple", quantity: 4 }, {name: "bread", quantity: 2 }, {name: "milk", quantity: 2 }, {name: "peach", quantity: 2 }, {name: "lettuce", quantity: 1 }];
assertArraysEqual(map(shoppinglist, item => item.name), ["apple", "bread", "milk", "peach", "lettuce"]);

module.exports = map;