// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names){
  let result = " ";
  const comma = ", ";
  const and = " & ";
  while (names.length) {
    result += names.shift().name;
    if (names.length == 1) {
      result += and;
    } else if (names.length > 1) {
      result += comma;
    }
  }
  return result.trim();
}
