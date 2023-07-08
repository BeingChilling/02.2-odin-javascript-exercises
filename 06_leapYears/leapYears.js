const leapYears = function (year) {
  // * Years divisible by 4 are leap years.
  // * years can only be divided by 4.
  // * years can be divided by 100
  // * years can be divided by 400
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
