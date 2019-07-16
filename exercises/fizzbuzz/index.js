// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (var i = 1; i <= n; i++) {
    let result = "";
    if (i % 3 === 0) {
      result += "fizz";
    }
    if (i % 5 === 0) {
      result += "buzz";
    }
    if (result === "") {
      result = i;
    }

    //multiple of 3 and 5 is multiple of 15

    console.log(result);
  }
}

module.exports = fizzBuzz;
