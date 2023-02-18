const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([], []);
assertArraysEqual([5, [6, [7, 8]], [9, 10]], [5, [6, [7, 8]], [9, 10]]);
assertArraysEqual([5, [6, [7, 8, 12]], [9, 10]], [5, [6, [7, 8]], [9, 10]]);