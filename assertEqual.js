// FUNCTION IMPLEMENTATION
// this compares the actual and the expected and returnsa a string to xplain the results
const assertEqual = function (actual, expected) {
  const emoji = require('node-emoji');
  const x = emoji.get('x');
  const thumbsup = emoji.get('thumbsup');

  if (actual === expected) {
    return (`${thumbsup} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return (`${x} Assertion Failed: ${actual} !== ${expected}`);
  }

};

//could also use String.fromCodePoint() to make emojis
// eg; var emoji = String.fromCodePoint(0x1F621)

module.exports = assertEqual;
// not that we are exporting the variable and NOT Calling the function.