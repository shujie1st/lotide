const flatten = function(inputArray) {
  let flattenedArray = [];
  for (const element of inputArray) {
    if (Array.isArray(element)) {
      for (const item of element) {
        flattenedArray.push(item);
      }
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};


module.exports = flatten;