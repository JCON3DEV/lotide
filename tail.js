// FUNCTION IMPLEMENTATION
const tail = function(assertEqual){
  let firstIndex = actual;
  console.log(firstIndex);
  return firstIndex
}
//Need some help. confused

const assertEqual = function (actual, expected) {
  const emoji = require('node-emoji');

  const x = emoji.get('x');
  const thumbsup = emoji.get('thumbsup');

  if (actual === expected) {
    console.log(`${thumbsup} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${x} Assertion Failed: ${actual} !== ${expected}`);
  }

};

//could also use String.fromCodePoint() to make emojis
// eg; var emoji = String.fromCodePoint(0x1F621)

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Jordan", "Jordan");
assertEqual("Jordan", "Badass");
assertEqual(16, 12);
assertEqual(94, "Golf");