// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


function pigIt(str){
  const firstLetters = [];
  const withoutFirst = [];
  const pigLatin = [];
  let strArr = str.split(' ');
  strArr.forEach(function(word) {
    firstLetters.push(word[0]);
    withoutFirst.push(word.substr(1));
  });
  withoutFirst.forEach(function(word, i=0) {
    pigLatin.push(word+firstLetters[i]+"ay");
  });
  const answer = pigLatin.join(' ');
  return answer;
}
