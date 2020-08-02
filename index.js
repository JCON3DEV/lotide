const head = require("./head.js");
const tail = require("./tail.js");
const middle = require("./middle.js");
const without = require("./without.js"); //needs mocha test
// const takeUntil = require("./takeUntil"); // unfinished
const map = require("./map.js");
const findKeyByValue = require("./findKeyByValue.js");
const findKey = require("./findKey.js");
const eqArrays = require("./eqArrays.js");
const countOnly = require("./countOnly");
const countLetters = require("./countLetters");
const assertEqual = require("./assertEqual");
const assertArraysEqual = require("./assertArraysEqual");
// const eqObjects = require("./eqObjects"); // unfinished

module.exports = {
  head,
  tail,
  middle,
  without,
  takeUntil,
  map,
  findKeyByValue,
  findKey,
  eqArrays,
  countOnly,
  countLetters,
  assertEqual,
  assertArraysEqual,
  eqObjects
}