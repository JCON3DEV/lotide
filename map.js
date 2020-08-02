// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = function(words, word) {
//   return words[0];
// };

//console.log(results1);

const map = function(array, callback) {
  const results = [];
  
  for (let item of array) {
    //console.log('item BEFORE: ', item);
    results.push(callback(item));
    //console.log('item AFTER: ', callback(item));
  }

  return results;
};
//console.log(map(words, results1));

///  =========================================
///  Old code below;
/// ==========================================

// const assertEqual = function (actual, expected){

//   console.log(expected);
//   const emoji = require('node-emoji');

//   const x = emoji.get('x');
//   const thumbsup = emoji.get('thumbsup');

//   if (assertArraysEqual(actual, expected)) {
//     console.log(`${thumbsup} Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`${x} Assertion Failed: ${actual} !== ${expected}`);
//   }

// };

// const assertArraysEqual = (first, second) => {
//   if (first === undefined) {
//     return true;
//   }

//   for (let i = 0; i < first.length; i++) {

//     if (first[i] === second[i]) {
//       expected = true;
//     } else {
//       expected = false;
//       return false;
//     }
//   }

//   return true;
// };

// const eqArrays = function (array1, array2){
//   for (let i = 0; i < array1.length; i++) {

//     if (array1[i] === array2[i]) {
//       expected = true;
//     } else {
//       expected = false;
//       return false;
//     }
//   }

//   return true;
// };