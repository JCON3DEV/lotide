const assertEqual = function (actual, expected) {
  console.log(expected);//currently this is undefined. needs improving
  const emoji = require('node-emoji');

  const x = emoji.get('x');
  const thumbsup = emoji.get('thumbsup');

  if (actual === expected) {
    console.log(`${thumbsup} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${x} Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function(array1, array2){
  for(let i = 0; i < array1.length; i++){
    //Tongxin suggested switching this operator to BANG operator
    if(array1[i] === array2[i]){
      console.log("matches");
      expected = true;
    }
    else {
      console.log("false");
      expected = false;
      return false;
    } 
    return true;
  }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3])) // => true
//eqArrays([1, 2, 3], [3, 2, 1]) // => false

//eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
//eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
