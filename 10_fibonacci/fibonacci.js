// const fibonacci = function (num) {
//   // * Fibonacci-reeks gaat: f0 = 0, f1 = 1, fn = fn-1 + fn-2
//   if (num < 0) {
//     return "OOPS";
//   }
//   if (num == 1 || num == 2) {
//     return 1;
//   }
//   // * het doel: f[num-1] + f[num-2]
//   for (let i = 3; i <= num; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//     resultaat = fib[i];
//   }
//   return resultaat;
// };

const fibonacci = function (count) {
  if (count < 0) return "OOPS";
  const fibPart = [0, 1];
  for (let index = 0; index <= count; index++) {
    fibPart.push(fibPart[index] + fibPart[index + 1]);
  }
  return fibPart[count];
};

// Do not edit below this line
module.exports = fibonacci;
