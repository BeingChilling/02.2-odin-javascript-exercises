const sumAll = function (min, max) {
  let final = 0;
  if (!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0)
    return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
