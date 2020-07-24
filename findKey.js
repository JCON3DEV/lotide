// Implement the function findKey which takes in an object and a callback.
// It should scan the object and return the first key for which the 
// callback returns a truthy value.If no key is found, then it should 
// return undefined.


const assertEqual = function (actual, expected) {

  //console.log(expected);
  const emoji = require('node-emoji');

  const x = emoji.get('x');
  const thumbsup = emoji.get('thumbsup');

  if (actual === expected) {
    console.log(`${thumbsup} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${x} Assertion Failed: ${actual} !== ${expected}`);
  }

};


const reviews = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};


function matchingFunc (x) {
  console.log("checking the x parameter;", x);
  //Prints ; 
  // checking the x parameter; { stars: 1 }
  // checking the x parameter; { stars: 3 }
  // checking the x parameter; { stars: 2 }
  return x.stars === 2; // => "noma"[]
}
function findKeys(object /*reviews*/,callback /*matchingFunc*/) {
  for (let key of Object.keys(object)) {
    if (callback(object[key]/*matchingFunc(x)*/)) {      
      return key;
    }
  }
};

console.log(findKeys(reviews,matchingFunc));

// ### HOW DO I TEST WITH ASSERT EQUAL FUNCTION ?? ###
assertEqual(findKeys(reviews, matchingFunc),"noma");
