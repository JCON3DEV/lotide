const eqArrays = function (array1, array2) {
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
}

const assertArraysEqual = (first, second) => {
  array1 = first;
  array2 = second;

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

const without = function(source, itemsToRemove) {
  let holdingArray = [];
  for (let i = 0; i < source.length; i++) {
    
    if (source[i] === itemsToRemove[i]) {
      
    }
    else {
      holdingArray = holdingArray.concat(source[i]);
    }
  }
  return holdingArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 
//###Need to loop through each item in the itemToRemove array so that it needn'y be in the same order##

// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


/* --- challenge states: ---
Implement without which will return a subset of a given array, 
removing unwanted elements. 
This function should take in a source array and a itemsToRemove array.
It should return a new array with only those elements from source 
that are not present in the itemsToRemove array.

## it does not say that these sould be passed to any other function 
or am i mistaken? ##
*/