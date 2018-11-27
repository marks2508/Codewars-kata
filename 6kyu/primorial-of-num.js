// Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P#
// numPrimorial (3) ==> return (30)
// Explanation:
// Since the passed number is (3) ,Then the primorial should obtained by multiplying 2 * 3 * 5 = 30 .
// Mathematically written as , P3# = 30 .

function numPrimorial(n){
  var array = [2, 3];
  for (var i = 5; i <= 100; i += 2) {
    if (array.every(function(p) { return i % p; })) {
      array.push(i);
    }
  }
  const ansArr = [];
  for (let i = 0; i < n; i++) {
    ansArr.push(array[i]);
  }
  //     return ansArr;
  const reducer = (a,b) => a * b;
  return ansArr.reduce(reducer);
}
