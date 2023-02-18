const assertObjectsEqual = require('../assertObjectsEqual');

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 2, c: 3 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 2 }, { b: [2], a: '1' });
assertObjectsEqual({ a: 2, b: [3, 4, 5] }, { a: 2, b: [3, 4, 5] });