// In this kata, you must create a digital root function.
// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

function digital_root(n) {
  const newArr = (n).toString(10).split("").map(function(t){return parseInt(t)})
  const ans = (a,b) => a+b;
  const ans2 = newArr.reduce(ans);
  if (ans2 < 10) {
  return ans2;
  } else {
  const twoArr = (ans2).toString(10).split("").map(function(t){return parseInt(t)});
  const ans3 = twoArr.reduce(ans);
  return ans3;
  }
}
