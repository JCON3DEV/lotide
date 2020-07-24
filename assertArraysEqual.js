const assertEqual = function (actual, expected) {

  console.log(expected);
  const emoji = require('node-emoji');

  const x = emoji.get('x');
  const thumbsup = emoji.get('thumbsup');

  if (assertArraysEqual(actual, expected)){
    console.log(`${thumbsup} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${x} Assertion Failed: ${actual} !== ${expected}`);
  }

};

const assertArraysEqual = (first, second)=> {
  array1 = first;
  array2 = second;
  if (array1 === undefined) {
    return true;
  }
  
  for (let i = 0; i < array1.length; i++) {

    if (array1[i] === array2[i]) {
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
};

/* 
below was original approach which worked - subsequently changed a few lines of 
code within assertArraysEqual
*/
//assertEqual(assertArraysEqual([1,5,3,4],[1,2,3,4]), expected);
assertEqual([1, 5, 3, 4], [1, 2, 3, 4]);

