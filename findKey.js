const findKey = function(theObject, callback) {
  for (const key of Object.keys(theObject)) {
    if (callback(theObject[key])) {
      return key;
    }
  }
};


module.exports = findKey;



