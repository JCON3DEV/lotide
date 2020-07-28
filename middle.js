// A function that returns the middle element(s) of an array
const middle = function(array){
  let numOfElements = array.length;
  let halfwayIndex = Math.floor(numOfElements / 2);
  let holdingArray = []
  
  if (numOfElements <= 2) { //for arrays shorter than 2 elements
    return [];//can this be done?
  }
  else if (numOfElements % 2) {//for odd numbers
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

// console.log(middle([1, 2, 3, 4, 5, 6]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1]));
