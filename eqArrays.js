// const assertEqual = function (actual, expected) {
  
//   //console.log(expected);
//   const emoji = require('node-emoji');

//   const x = emoji.get('x');
//   const thumbsup = emoji.get('thumbsup');

//   if (actual === expected) {
//     console.log(`${thumbsup} Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`${x} Assertion Failed: ${actual} !== ${expected}`);
//   }

// };
//const assertEqual = ("assertEqual.js");
// =================
/* This function provides a boolean value as to whether 
the array length is the same or not */
// =================

const eqArrays = function(array1, array2){
  for(let i = 0; i < array1.length; i++){
    
    if(array1[i] === array2[i]){
      //console.log(array1[i], array2[i])
      //console.log("matches");
      expected = true;
    }
    else {
      //console.log("false");
      expected = false;
      return false;
    } 
  }
  
  return true; 
}

module.exports = eqArrays;

