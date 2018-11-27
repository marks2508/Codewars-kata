// Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function lottery()). Your code inside lottery() must filter out all letters and return unique integers as a string. If there are no integers in the string return - “One more run!”.

// Examples:
// var str = "hPrBKWDH8yc6Lt5NQZWQ";
// lottery(str); // should return "865"
// var str = "ynMAisVpHEqpqHBqTrwH";
// lottery(str); // should return "One more run!"

function lottery(str){ 
  const removedText = str.replace(/\D+/g, '');
  const strArr = removedText.split('');
  let uniqueArray = []
  for(let i = 0;i < strArr.length; i++){
    if(uniqueArray.indexOf(strArr[i]) == -1){
      uniqueArray.push(strArr[i])
    }
  }
  if (uniqueArray.length === 0) {
    return "One more run!"
  } else {
  return uniqueArray.join('');
  }
}
