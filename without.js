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

const without = function(source, itemsToRemove) {
  let holdingArray = source.filter(word => !itemsToRemove.includes(word));
  return holdingArray;
  //realised that filter would be easier. Mentor Monica helped me to find 
  // .includes() and then from there got this really concise result!
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 
