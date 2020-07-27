const assertEqual = require("../assertEqual.js");
const eqArrays = require("../eqArrays.js");

// Test code;
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), expected)); // => true
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), expected)); // => false

console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), expected)); // => true
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), expected)); // => false
