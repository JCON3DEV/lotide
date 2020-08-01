const eqObjects = function (object1, object2) {
  let first = Object.keys(object1);//typeof array
  let second = Object.keys(object2);
  // console.log(first);
  // console.log(second);
  if (first.length !== second.length) {
    return false;
  }
  for (let key of first) {
    // console.log(key)
    // console.log(object1[key]);
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  // the below line wil allow the inspection of the object;
  let result = eqObjects(object1, object2);
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(object1)}`);
  console.log(`Example label: ${inspect(object2)}`);
  if (result) {
    console.log("✅✅✅ test successful")
  } else {
    console.log("🛑🛑🛑 test failed, objects not equal");
  }
}

// eqObjects(ab,ba);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const cd = { c: "1", d: "2" };
const dc = { c: "1", d: "2" };

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd,cd2);