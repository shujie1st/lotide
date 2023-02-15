const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(inputString) {
  let countOutput = {};
  for (const letter of inputString) {
    if (letter !== " ") {
      if (countOutput[letter]) {
        countOutput[letter] += 1;
      } else {
        countOutput[letter] = 1;
      }
    }
  }
  return countOutput;
};

// TEST CODE
let testString = "a sunny day";
assertEqual(countLetters(testString)["a"], 2);
assertEqual(countLetters(testString)["s"], 1);
assertEqual(countLetters(testString)["u"], 1);
assertEqual(countLetters(testString)["n"], 2);
assertEqual(countLetters(testString)["y"], 2);
assertEqual(countLetters(testString)["d"], 1);
assertEqual(countLetters(testString)[" "], undefined);
assertEqual(countLetters(testString)["c"], undefined);


module.exports = countLetters;