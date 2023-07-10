const palindromes = function (str) {
  // * Take the origional string.
  // get rid of all the punctuations and spaces and turn everything into lower case.
  const regex = /[a-zA-Z0-9]/g;
  const onlyChar = str.toLowerCase().split("").join("").match(regex).join("");
  const reversed = onlyChar.split("").reverse().join("");
  if (onlyChar === reversed) {
    return true;
  } else {
    return false;
  }
  // * Take the reversed string.
  // * If the reversed is the same as the origional, return true
};

// Do not edit below this line
module.exports = palindromes;
