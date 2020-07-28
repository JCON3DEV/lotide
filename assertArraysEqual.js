const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

/* This function returns a boolean true or false if the arrays 
are the same length  */
const assertArraysEqual = (first, second)=> {
  const result = eqArrays(first, second);
  //console.assert(result, "result is %s", result);
  // Example of console.assert 
  if (result) {
    console.log("test successful")
  } else {
    console.log("test failed, arrays not equal");
  }
}


module.exports = assertArraysEqual;



