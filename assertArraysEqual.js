/* This function returns a boolean true or false if the arrays 
are the same length  */
const assertArraysEqual = (first, second)=> {
  if (first === undefined) {
    return true;
  }
  
  for (let i = 0; i < first.length; i++) {

    if (first[i] === second[i]) {
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

module.exports = assertArraysEqual;



