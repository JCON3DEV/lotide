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

const eqObjects = function (object1, object2) {
  let first = Object.keys(object1);//typeof array
  let second = Object.keys(object2);
  // console.log(first);
  // console.log(second);
  if (first.length !== second.length) {
    return false;
  }
  for (let key of first) {
    // console.log(key)
    // console.log(object1[key]);
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

console.log(assertEqual(object1[key],object2[key]));




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const cd = { c: "1", d: "2" };
const dc = { c: "1", d: "2" };

const cd2 = { c: "1", d: ["2", 3, 4] }; // fails - why implement eqArrays? ###
//############# Need to ak a mentor / classmate about this  - investigate ###

// console.log(eqObjects(ab,ba));
// console.log(eqObjects(cd, dc));
console.log(eqObjects(ba, cd));





























// const assertEqual = function (actual, expected) {
//   const emoji = require('node-emoji');
//   const x = emoji.get('x');
//   const thumbsup = emoji.get('thumbsup');

//   if (actual === expected) {
//     return (`${thumbsup} Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     return (`${x} Assertion Failed: ${actual} !== ${expected}`);
//   }

// };
//could also use String.fromCodePoint() to make emojis
// eg; var emoji = String.fromCodePoint(0x1F621)

// // Returns true if both objects have identical keys with identical values.
// // Otherwise you get back a big fat false!
// const eqObjects = function (object1, object2) {
//   let noOfInitialPeramKeys = Object.keys(object1).length;
//   let noOfSecondPeramKeys = Object.keys(object2).length;
//   console.log(noOfInitialPeramKeys); // Prints 2
//   console.log(noOfSecondPeramKeys); // Prints 2
//   if (noOfInitialPeramKeys === noOfSecondPeramKeys) {
//     assesment1 = true;
//   } else {
//     return "No Match";
//   }
//   let initialPeramKeys = Object.keys(object1);
//   // above works fine
//   // #### Need to loop through the objects values to comapore them. HOW?
//   // console.log(initialPeramKeys);
  
//   for (let obj in object1) {
//     // console.log(obj); // prints the key
//     if (object1[obj] === object2[obj]) {
//       assessment2 = true;
//     } else {
//       return "No Match";
//     }
//     // console.log("obj 1 ", object1[obj]); // prints the objects value
//     console.log("obj 2 ", object2[obj]); // prints the objects value
//   }
  
//   return "objects are equal";
  
// };
