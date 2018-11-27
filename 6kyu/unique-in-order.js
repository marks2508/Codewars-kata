// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
var finalArray = [];
 var tempArray = [];
  if (Array.isArray(iterable) === false) {
    tempArray = iterable.split('');
  } else {
    tempArray = iterable;
  }
 for (i = 0; i < tempArray.length; i++) {
   if (tempArray[i] != tempArray[i-1]) {
     finalArray.push(tempArray[i]);
   }
 }
 return finalArray;
}
