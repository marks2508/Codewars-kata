// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


var moveZeros = function (arr) {
  let array = [];
  let orig = [];
  arr.forEach(function(number) {
    if (number === 0) {
      array.push(number);
    } else if (number !== 0) {
      orig.push(number)
    }
  });
  return orig.concat(array);
}
