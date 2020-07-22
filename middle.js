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

const middle = function(array){
  let numOfElements = array.length;
  let halfway = Math.floor(numOfElements / 2);
  console.log(halfway);
  let holdingArray = []
  
  if (numOfElements <= 2) { //for arrays shorter than 2 elements
    return [];//can this be done?
  }
  else if(numOfElements % 2 !== 0) {//for odd numbers
    holdingArray = holdingArray.concat(array[halfway]);
    
    return holdingArray;
  }
  else if (numOfElements % 2 === 0){
    holdingArray = holdingArray.concat(array[halfway - 1]);
    holdingArray = holdingArray.concat(array[halfway]);
    return holdingArray
  }



}
//Create a function that returns the iddle element(s) of an array
/*
Asses the length of the input array

if operator length = 1 or 2 {

}
Modello operator if odd number {
  return single element
}
modello if even num{
  return two elelments
}
*/
console.log(middle([1,2,3,4,5,6]));