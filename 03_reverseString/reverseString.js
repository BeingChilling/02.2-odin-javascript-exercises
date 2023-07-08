const reverseString = function (string) {
  // * In the for loop, take the last letter of the string and unshift it to the new empty string.
  let splitStr = string.split("");
  let reversedStr = "";
  /*
    for loop {
      string - final letter
      the final letter added to the top of the new string
    }
  */

  for (let i = 0; i < string.length; i++) {
    let last = splitStr.slice(splitStr.length - 1);
    splitStr.pop();
    reversedStr += last;
  }
  return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
