const assertArraysEqual = (first, second) => {

  if (first === undefined) {
    return true;
  }

  for (let i = 0; i < first.length; i++) {

    if (first[i] === second[i]) {
      //let expected = true;
    } else {
      return false;
    }
  }

  return true;
};

const assertEqual = function(actual, expected) {
  //console.log(actual);
  //console.log(expected);
  const emoji = require('node-emoji');

  const x = emoji.get('x');
  const thumbsup = emoji.get('thumbsup');

  if (assertArraysEqual(actual, expected)) {
    console.log(`${thumbsup} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${x} Assertion Failed: ${actual} !== ${expected}`);
  }

};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    //if the object has truthy value then count in the array
    //if the object key is truthy but is not in the array dont count it
    //if falsy then dont count it
    const name = results[item];
    //console.log(item)
    if (itemsToCount[item]) {
      //ternary statement If the name key has a value then add 1 to the count
      //if not then ,....
      results[item] = name ? name + 1 : 1;
    }
    
  }
  
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
//console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
