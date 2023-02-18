const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
    
  for (const key of Object.keys(object1)) {
    if ((Array.isArray(object1[key]) && Array.isArray(object2[key]))) {
      // If both values are arrays and they are equal
      // Then continue to the next property for comparison
      if (eqArrays(object1[key], object2[key])) {
        continue;
      } else {
        return false;
      }
    } else if (typeof object1[key] === 'object' && !Array.isArray(object1[key]) && object1[key] !== null
            && typeof object2[key] === 'object' && !Array.isArray(object2[key]) && object2[key] !== null) {
      // If both values are objects and they are equal
      // Then continue to the next property for comparison
      // As typeof array/null also return object, check both values are not array/null
      if (eqObjects(object1[key], object2[key])) {
        continue;
      } else {
        return false;
      }
    } else if (object1[key] === object2[key]) {
      // If both values are strictly equal
      // Then continue to the next property for comparison
      continue;
    }
    return false;
  }
  return true;
};


module.exports = eqObjects;