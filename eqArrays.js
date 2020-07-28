// =================
/* This function provides a boolean value as to whether 
the array length is the same or not */
// =================

const eqArrays = function(array1, array2){
  if (array1.length !== array2.length) {
    return false;
  }

  for(let i = 0; i < array1.length; i++){
    
    if(array1[i] !== array2[i]){
      //console.log(array1[i], array2[i])
      //console.log("matches");
      return false;
    }
  }
  
  return true; 
}

module.exports = eqArrays;

