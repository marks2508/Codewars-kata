// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
  const newArr = [];
  arr.forEach(function(i){
    if (i >= 0) {
      newArr.push(i);
    }
  });
  if (arr.length === 0 || newArr.length === 0) {
    return 0;
  } else {
  const reducer = (a,b) => a + b;
  const sum = newArr.reduce(reducer);
  return sum;
  }
}
