// In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  let sqArr = [];
  const numArr = num.toString().split('');
  numArr.forEach(function(num){
    sqArr.push(num * num);
  });
  const ans = sqArr.join('')
  return Number(ans);
  }

// 2nd version

function squareDigits(num){
  const newArray = (''+num).split('').map(Number);
  const map1 = newArray.map(x => Math.pow(x,2));
  const mappedArray = map1.join('');
  return parseInt(mappedArray);
}
