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
  const characterCounter = {};
  let keyLetter;
  for(const char of stringSentance){ // cycles through each index in sentance
    // TESTING ;
    //console.log(char);//characters in the string
    //console.log(characterCounter[char]); // undefined
    //console.log(stringSentance[char]); // undefined
    
    if (characterCounter[char] === " "){
      break;
    }
    if (characterCounter[char] = stringSentance[char]) {
      
    }
    keyLetter = characterCounter[char];
    //stringSentance[char] = character ? character + 1 : 1;
  }
  for (const letter in stringSentance) {
    console.log(stringSentance[letter]);
    if (stringSentance[letter] === keyLetter) {
      keyLetter = keyLetter + 1;
    }
  }

  console.log(characterCounter);
  return characterCounter;
};

countLetters("lighthouse house");

// I simply cannot get this to add a freaking number to the bloody object.