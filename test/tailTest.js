const assertEqual = require('../assertEqual');
const tail = require('../tail');


// TEST CASE 1
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// TEST CASE 2
const numbers = tail([5, 6, 7, 8, 9]);
assertEqual(numbers.length, 4);
assertEqual(numbers[2], 8);
assertEqual(numbers[0], 6);

// TEST CASE 3: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// TEST CASE 4
const oneArray = tail(["hello"]);
assertEqual(oneArray.length, 0);