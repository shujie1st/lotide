const flatten = function(inputArray) {
  let flattenedArray = [];
  for (const element of inputArray) {
    if (Array.isArray(element)) {
      flattenedArray = flattenedArray.concat(flatten(element));
    } else {  
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};


module.exports = flatten;