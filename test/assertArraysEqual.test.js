const assertArraysEqual = require("../assertArraysEqual.js");
const assertEqual = require("../assertEqual.js");

// Test code;
assertArraysEqual([1, 5, 3, 4], [1, 2, 3, 4]);
assertArraysEqual([1, 5, 3, 4], [1, 2, 3, 4]);
assertArraysEqual([1, 5, 3, 4], [1, 5, 3, 4]);
