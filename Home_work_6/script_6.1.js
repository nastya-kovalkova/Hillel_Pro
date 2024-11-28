let stringFromUser = prompt("Enter any string");
let charsFromUser = null;

if (isValidString(stringFromUser)) {
  stringFromUser = stringFromUser.toLowerCase();
  charsFromUser = prompt("Enter the characters to delete by space");
  if (isValidString(charsFromUser)) {
    charsFromUser = charsFromUser.split(" ");
    charsFromUser = removeEmptyValues(charsFromUser);
    console.log(removeString(stringFromUser, charsFromUser));
  }
}

// function transformString(string, substring) {
//   if (!isValidString(string)) return;
//
//   if (!isValidString(substring)) return;
//
//   substring = substring.split(" ");
//   substring = newCharsArray(substring);
//
//   console.log(removeString(string, substring));
// }

// transformString(stringFromUser, charsFromUser);

function isValidString(string) {
  if (string === null) {
    alert("It's a pity you didn't want to enter any string!");
    return false;
  } else if (typeof string === "string" && string.trim() === "") {
    alert("Unfortunately you haven't entered anything!");
    return false;
  }
  return true;
}

function removeEmptyValues(array) {
  let newArray = [];
  let index = 0;

  for (const element of array) {
    if (element.trim() === "") continue;

    newArray[index++] = element;
  }

  return newArray;
}

function isMatch(string, startIndexString, elementOfSubstring) {
  for (let i = 0; i < elementOfSubstring.length; i++) {
    if (string[startIndexString + i] !== elementOfSubstring[i]) {
      return false;
    }
  }
  return true;
}

function removeString(string, substring) {
  let result = "";
  let index = 0;

  while (index < string.length) {
    let match = false;
    for (const element of substring) {
      if (isMatch(string, index, element)) {
        match = true;
        index += element.length;
        break;
      }
    }

    if (!match) {
      result += string[index];
      index++;
    }
  }
  return result;
}
