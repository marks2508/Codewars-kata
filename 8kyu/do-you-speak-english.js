// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence){
  const lower = sentence.toLowerCase();
  const regex = /english/gi;
  const ans = lower.match(regex);
  if (ans === null) {
    return false;
  } else {
    return true;
  }
}

// second version

function spEng(sentence){
  const newSen = sentence.toLowerCase();
  if (newSen.includes('english')) {
    return true;
  } else {
    return false;
  }
}
