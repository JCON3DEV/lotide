// // // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   const emoji = require('node-emoji');

//   const x = emoji.get('x');
//   const thumbsup = emoji.get('thumbsup');

//   if (actual === expected) {
//     console.log(`${thumbsup} Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`${x} Assertion Failed: ${actual} !== ${expected}`);
//   }

// };

//could also use String.fromCodePoint() to make emojis
// eg; var emoji = String.fromCodePoint(0x1F621)

// ==============
/* tail() should return an array containing everything form 
the original except the first element */
// =============

function tail(newArray) {
  let tailArray = [];

  tailArray = newArray.slice(1);
  console.log(tailArray);
  
  return tailArray;
  
}

module.exports = tail;
// module.exports = assertEqual;


// Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// //assertEqual(words.length, 3); // original array should still have 3 elements!
