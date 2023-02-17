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


module.exports = countLetters;