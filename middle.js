const middle = function(array) {
  let middleArray = [];
  if (array.length > 2) {
    if (array.length % 2 === 1) {
      // For arrays with odd number of elements
      // a single middle element should be returned
      middleArray.push(array[(array.length - 1) / 2]);
    } else {
      // For arrays with an even number of elements
      // two elements in the middle should be returned
      let x = (array.length / 2) - 1;
      middleArray.push(array[x], array[x + 1]);
    }
  }
  return middleArray;
};

module.exports = middle;