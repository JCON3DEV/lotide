// ==============
/* tail() should return an array containing everything form 
the original except the first element */
// =============

function tail(newArray) {
  let tailArray = [];

  tailArray = newArray.slice(1);
  console.log(tailArray);
  
  return tailArray;
  
}

module.exports = tail;
