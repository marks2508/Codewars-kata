// You are given two sorted arrays that contain only integers. Your task is to find a way to merge them into a single one, sorted in ascending order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

function mergeArrays(arr1, arr2) {
  const merged = arr1.concat(arr2).sort((a,b) => a - b);
  return Array.from(new Set(merged));
}

// alt version:

function mergeArrays(arr1, arr2) {
  const mergedArray = arr1.concat(arr2);
  const sortedArray = mergedArray.sort((a, b) => a - b);
  const answer = sortedArray.filter(function(elem, index, self) { return index === self.indexOf(elem);});
  return answer;
}

// another version:
function mergeArrays(arr1, arr2) {
  const sortedArray = arr1.concat(arr2);
  const numArray = sortedArray.sort((a, b) => a -b);
  return numArray.reduce(function(a,b) {
    if(a.indexOf(b)<0)a.push(b);return a;
  },
  []);  
}
