const repeatString = function (string, num) {
  let stringAll = "";
  if (num < 0) return "ERROR";
  for (let i = 0; i < num; i++) {
    stringAll += string;
    // *loop 1, string = hey
    // How can I store the string in the loop?
    // *loop 2, string = heyhey
    //  How can I concate the new string to current string?
    // *loop 3, string = heyheyhey
  }
  return stringAll;
};
// *The returned value needs to be num times of string. But there's only one return.
// * How does the string be stored based on the loop and returned at once?
// * How can the number decide the repeat time of the string?

// Do not edit below this line
module.exports = repeatString;
