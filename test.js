function double(num) {
    let double = num * 2;
    return double;
    // console.log(double)
}

// const num1 = double(4);
// const num2 = double(10);
// console.log(double)

// function doubler(nums, bill) {
//     for (let num of nums) {
//         bill(num)
//     }
// }

// doubler([5,10,15], n => console.log(n*2))


// let resultsArr = [2,4,8].map(function(n) {
//     return n * n;
// });

// console.log(resultsArr);

function map(arr, fn) {
    let resArr = [];
    for (let item of arr) {
        let d = fn(item);
        resArr.push(d);
    }
    return resArr;
}

// console.log(map([2,4,8], double));

function capitalizeIt(str) {
    return str.slice(0,1).toUpperCase() + str.slice(1);
}

let capped = map(['bill', 'sally', 'tom'], capitalizeIt);
console.log(capped);

// ###########################################################################

const letterPositions = function (sentence) {
  const results = {};
  let indexHolder = [];
  let wordsOfSentance = sentence.split(" ");
  let charactersOfSentance = wordsOfSentance.join("");
  let keys;
  //console.log(charactersOfSentance); //Prints; lighthouseinthehouse

  for (let i = 0; i < charactersOfSentance.length; i++) {
    // console.log(charactersOfSentance[i]);//prints all the characters
    // console.log(i); //prints the index

    for (let char of charactersOfSentance) {
      console.log(charactersOfSentance[i]);
      results[char] = indexHolder;
      keys = Object.keys(results);
      console.log(keys);
      //console.log (results[char]);
    }
    if (charactersOfSentance[i] === keys) {
      console.log("match");
      indexHolder.push(i);
    }
    else {
      //results[char].push(i);
      console.log("non-match");
      indexHolder.push(i);
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
