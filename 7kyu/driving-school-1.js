// Every month, a random number of students take the driving test at Fast & Furious(F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.

// At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed,rounded to the nearest integer.

// Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.


// Example:

// [10,10,10,18,20,20] --> 12

// Note:

// The maximum number of demerit points a student can score before the tester calls it a day is 40.

// version 1

function passed (list) {
  const reducer = (a,b) => a + b;
  const newArr = [];
  list.forEach(function(x) {
    if (x <= 18) {
      newArr.push(x);
    }
  });
  if (newArr.length === 0) {
    return "No pass scores registered."
  } else {
  const ans =  newArr.reduce(reducer) / newArr.length;
  const final = Math.round(ans);
  return final;
  }
}

// version 2

function passed (list) {
  let ansList = [];
  list.forEach(function(score) {
    if (score <= 18) {
      ansList.push(score);
    }
  });
  if (ansList.length === 0) {
    return 'No pass scores registered.';
  } else {
    const sum =  ansList.reduce((a,b) => a + b);
    const ans = sum / ansList.length;
    return Math.round(ans);
  }
} 
