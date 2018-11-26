// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const arr1Int = arr1.reduce(reducer);
const arr2Int = arr2.reduce(reducer);

const sum = arr1Int + arr2Int;
return sum;
};

//refactored

function arrayPlusArray(arr1, arr2) {
  const sum1 = arr1.reduce((a,b) => a + b);
  const sum2 = arr2.reduce((a,b) => a + b);
  return sum1 + sum2;
}
