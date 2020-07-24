const assertArraysEqual = (first, second) => {
  let array1 = first;
  let array2 = second;

  if (array1 === undefined) {
    return true;
  }

  for (let i = 0; i < array1.length; i++) {

    if (array1[i] === array2[i]) {
    
    } else {
      return false;
    }
  }

  return true;
};

/*
need to create an empty object
.
need a for of loop to seperate each of the chars into their own item
.
need to do a count for each of the chars - ternary statement
.
*/ 
const countLetters = function(stringSentance){
  const results = {};
  
  
  for(const char of stringSentance){ // cycles through each index in sentance
    
    if (results[char] === stringSentance[char]) {           
      
      results[char] += 1;

    }
    else{
      results[char] = 1;
    }
    //keyLetter = characterCounter[char];
    //stringSentance[char] = character ? character + 1 : 1;
  }
  
  console.log(results);
  return results;
};

countLetters("lighthousehouse");

// It is currently showingf the index of the keys and not their count
// Get help in the morning