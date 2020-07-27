// const eqArrays = function (array1, array2) {
//   for (let i = 0; i < array1.length; i++) {

//     if (array1[i] === array2[i]) {
//       //console.log(array1[i], array2[i])
//       //console.log("matches");
//       expected = true;
//     }
//     else {
//       //console.log("false");
//       expected = false;
//       return false;
//     }
//   }
  
//   return true;
// }

// const assertArraysEqual = (first, second) => {
//   array1 = first;
//   array2 = second;
  
//   for (let i = 0; i < array1.length; i++) {
    
//     if (array1[i] === array2[i]) {
//       //console.log(array1[i], array2[i])
//       //console.log("matches");
//       expected = true;
//     }
//     else {
//       //console.log("false");
//       expected = false;
//       return false;
//     }
//   }
  
//   return true;
// };


// A function that returns the middle element(s) of an array
const middle = function(array){
  let numOfElements = array.length;
  let halfwayIndex = Math.floor(numOfElements / 2);
  console.log("Halfway index? ; ", halfwayIndex);
  let holdingArray = []
  
  if (numOfElements <= 2) { //for arrays shorter than 2 elements
    return [];//can this be done?
  }
  else if(numOfElements % 2 !== 0) {//for odd numbers
    holdingArray = holdingArray.concat(array[halfwayIndex]);
    
    return holdingArray;
  }
  else if (numOfElements % 2 === 0){
    holdingArray = holdingArray.concat(array[halfwayIndex - 1]);
    holdingArray = holdingArray.concat(array[halfwayIndex]);
    return holdingArray
  }

}

module.exports = middle;
