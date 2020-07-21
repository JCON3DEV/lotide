// FUNCTION IMPLEMENTATION
const head = function (array, expected){
  let startingEle = array[0];
  return startingEle;
};

const assertEqual = function (head, expected) {
  
  const emoji = require('node-emoji');

  const x = emoji.get('x');
  const thumbsup = emoji.get('thumbsup');

  if (head === expected) {
    console.log(`${thumbsup} Assertion Passed: ${head} === ${expected}`);
  } else {
    console.log(`${x} Assertion Failed: ${head} !== ${expected}`);
  }

};

//could also use String.fromCodePoint() to make emojis
// eg; var emoji = String.fromCodePoint(0x1F621)

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
/*
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Jordan", "Jordan");
assertEqual("Jordan", "Badass");
assertEqual(16, 12);
assertEqual(94, "Golf");
*/