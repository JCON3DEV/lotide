const assert = require("chai").assert;
const middle = require("../middle.js");
const assertArraysEqual = require("../assertArraysEqual.js");
//Mine does note require this?...

// Test code;
// console.log(middle([1, 2, 3, 4, 5, 6]));
// console.log(middle([1, 2, 3, 4, 5]));
// assertArraysEqual(middle([1]), []);

describe("#middle", () => {
  it("Should return [3, 4] from [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  })
});