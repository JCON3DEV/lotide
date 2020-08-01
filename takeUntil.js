const assertArraysEqual = (first, second) => {
  if (first === undefined) {
    return true;
  }

  for (let i = 0; i < first.length; i++) {

    if (first[i] === second[i]) {
      expected = true;
    } else {
      expected = false;
      return false;
    }
  }

  return true;
};

const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {

    if (array1[i] === array2[i]) {
      expected = true;
    } else {
      expected = false;
      return false;
    }
  }

  return true;
};



// Examples; 
//const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);

/*
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
*/
/*
// Expected output;
[1, 2, 5, 7, 2]
---
['I\'ve', 'been', 'to', 'Hollywood']
*/
//could filter the array using .filter (although this returns all items excpet those that fail
//could .map inside the filter
/*
const limitFunc = function (array) {
  let result = data1.filter(num => num > 5); //&&
  //data1.filter(num => num.length < 2);
  return result;
};
//loop through function array
const takeUntil = function (array, callback) {
  for (elem in array){
    if(limitFunc)
    console.log(limitFunc[elem]);
  }
}

console.log(takeUntil(data1, limitFunc()));
// Prints;  [ 2, 5, 7, 2, 2, 4, 5 ]
*/


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const arr = ['mo','jo','bill', 'sally', 'tom'];

console.log('---');

// Above is prev work
const isLongWord = function(word) {
  if (word.length > 3) {
      return true;
    }
  return false;
};


const takeUntil = function (arr, cb) {
  const resultsArray = [];
  for (let elem of arr) {
    if (cb(elem) === false) {
      resultsArray.push(elem);
    } else {
      return resultsArray;
    }
  }
};
console.log(takeUntil(arr, isLongWord));

// function isComma returns either true or undefined;
// const isComma = function (x) {
//   if (x === ",") {
//     return true;
//   } 
//   return false;
// };
// console.log(isComma("nope"));
// console.log(isComma(","));

// =============== Recreate =======================