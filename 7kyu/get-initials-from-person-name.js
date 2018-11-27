// Write function toInitials returs initials for a given person name. E.g: "Bill Gates" -> "B. G."

// Note: initials should be separated with a spac

function toInitials(name) {
  let initialsArr = [];
  const split = name.split(" ");
  split.forEach(function(name) {
    initialsArr.push(name[0]);
  });
  if (initialsArr.length === 2) {
    return initialsArr[0] + ". " + initialsArr[1] + ".";
  } else {
    return initialsArr[0] + ". " + initialsArr[1] + ". " + initialsArr[2] + ".";
  }
}
