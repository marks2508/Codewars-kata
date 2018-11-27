// Write function toAcronym which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg: Code wars -> C, w -> C W -> CW//

function toAcronym( input ){
  const arr = input.split(' ');
  const ansArr = [];
  arr.forEach(function(word) {
    ansArr.push(word[0].toUpperCase());
  });
  const ans = ansArr.join('');
  return ans;
}

function toAcronym( input ) {
  let arr = [];
  const split = input.toString().split(' ');
  split.forEach(function(word){
    arr.push(word.charAt(0));
  });
  const ans = arr.join('');
  return ans.toUpperCase();
}
