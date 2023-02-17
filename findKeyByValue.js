const findKeyByValue = function(theObject, theValue) {
  for (const key of Object.keys(theObject)) {
    if (theObject[key] === theValue) {
      return key;
    }
  }
};


module.exports = findKeyByValue;