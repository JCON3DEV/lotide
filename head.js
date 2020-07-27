const assertEqual = require("./assertEqual");
// FUNCTION IMPLEMENTATION
// head(); returns the first element of an array and takes an expected parameter
const head = function (array, expected){
  let startingEle = array[0];
  return startingEle;
};



//could also use String.fromCodePoint() to make emojis
// eg; var emoji = String.fromCodePoint(0x1F621)