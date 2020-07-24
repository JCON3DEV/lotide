// Implement the function findKeyByValue which takes in an object and a value.
// It should scan the object and return the first key which contains the given 
// value.If no key with that given value is found, then it should return 
// undefined.


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

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};


function findKeyByValue(object, value){
  for (tvShow of Object.keys(object)){    
    //console.log(tvShow); // Prints the object Keys
    //console.log(value);// Prints Brooklyn Nine Nine
    if (object[tvShow] === value) {
      return tvShow;
      
    };
  }
}

console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));