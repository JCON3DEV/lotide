const assert = require("chai").assert;
const tail = require("../tail.js");
// const asserEqual = require("../assertEqual.js");

// TEST CODE

// tail([2, 4, 6, 8]); // prints [4, 6, 8]
// tail([4, 2, 8, 5, 3]); // prints [2, 8, 5, 3]
// tail([1, 2, 3, 4, 5]);  // prints [2, 3, 4, 5]

describe ("#tail", () => {
  it ("returns [4, 6, 8] for [2, 4, 6, 8]", () => {
    assert.deepEqual(tail([2, 4, 6, 8]), [4, 6, 8]);;
  });
  it ("returns [2, 8, 5, 3] for [4, 2, 8, 5, 3]", () => {
    assert.deepEqual(tail([4, 2, 8, 5, 3]), [2, 8, 5, 3]);
  })
  it ("returns [2, 3, 4, 5] for ([1, 2, 3, 4, 5])", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  })
})
