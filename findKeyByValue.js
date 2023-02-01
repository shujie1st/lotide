const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(theObject, theValue) {
  for (const key of Object.keys(theObject)) {
    if (theObject[key] === theValue) {
      return key;
    }
  }
};

// TEST CASE1
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// TEST CASE2
const person = {
  name: "Cindy",
  age: 25,
  client_id: 25,
  address: "105 Main Street"
};

assertEqual(findKeyByValue(person, "105 Main Street"), "address");
assertEqual(findKeyByValue(person, 25), "age");


