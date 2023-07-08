const removeFromArray = function (arr, ...args) {
  let newArr = [];
  // * We have an array, and some other arguments. If the argument is present in the array, the item in the array should be gone.
  // * Each item of arr should check if it's in args

  for (let i = 0; i < arr.length; i++) {
    if (!args.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
