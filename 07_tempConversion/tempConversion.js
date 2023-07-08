const convertToCelsius = function (fahrenheit) {
  // const celsius = (fahrenheit - 32) * (5 / 9);
  // if (celsius % 1 === 0) {
  //   return parseFloat(celsius);
  // } else {
  //   const fixed = celsius.toFixed(1);
  //   return parseFloat(fixed);
  // }
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  // const fahrenheit = celsius * (9 / 5) + 32;
  // if (fahrenheit % 1 === 0) {
  //   return parseFloat(fahrenheit);
  // } else {
  //   const fixed = fahrenheit.toFixed(1);
  //   return parseFloat(fixed);
  // }
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
