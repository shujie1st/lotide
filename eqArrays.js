const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      // If both items are arrays and they are equal
      // Then continue to the next item for comparison
      if (eqArrays(array1[i], array2[i])) {
        continue;
      } else {
        return false;
      }
    } else {
      // If both items are strictly equal
      // Then continue to the item for comparison
      if (array1[i] === array2[i]) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqArrays;
