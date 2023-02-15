const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(theObject, callback) {
  for (const key of Object.keys(theObject)) {
    if (callback(theObject[key])) {
      return key;
    }
  }
};

// TEST CASE
const object1 = {
  "a": { score: 5 },
  "b": { score: 3 },
  "c": { score: 6 },
  "d": { score: 7 },
  "e": { score: 3 },
  "f": { score: 5 }
};
assertEqual(findKey(object1, x => x.score === 5), "a");
assertEqual(findKey(object1, x => x.score < 4), "b");
assertEqual(findKey(object1, x => x.score > 8), undefined);


module.exports = findKey;



