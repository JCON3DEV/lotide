const letterPositions = function (sentence) {
  const results = {};
  let wordsOfSentance = sentence.split(" ");
  let charactersOfSentance = wordsOfSentance.join("");
  
  for (let i = 0; i < charactersOfSentance.length; i++) {
    // Below excludes the spaces in the sentance.
    if (charactersOfSentance[i] !== " ") {
      //by appending this using square brackets I set it to the object keys
      if (results[charactersOfSentance[i]]) {
        // Above is the recorded index of the characters
        //by pushing the index it adds to the array
        results[charactersOfSentance[i]].push(i);
        //console.log(results[charactersOfSentance[i]]); 
      } else {
        // i create the array if it does not exist already
        results[charactersOfSentance[i]] = [i]
      }
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
/*
expected output;
{
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/