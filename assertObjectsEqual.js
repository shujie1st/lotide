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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
    
  for (const key in object1) {
    // If both values are arrays and they are equal
    // Or two values are strictly equal
    //Then continue to the next property for comparison
    if ((Array.isArray(object1[key]) && Array.isArray(object2[key]) && eqArrays(object1[key], object2[key]))
          || object1[key] === object2[key]) {
      continue;
    } else {
      return false;
    }
  }
  return true;

};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Call the function for verification
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 2, c: 3 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 2 }, { b: [2], a: '1' });
assertObjectsEqual({ a: 2, b: [3, 4, 5] }, { a: 2, b: [3, 4, 5] });


module.exports = assertObjectsEqual;