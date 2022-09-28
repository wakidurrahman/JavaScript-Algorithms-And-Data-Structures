/**
 * https://stackoverflow.com/questions/29549836/how-to-find-the-sum-of-all-numbers-between-1-and-n-using-javascript 
 * *** How to find the sum of all numbers between 1 and N using JavaScript.
 * *** I'm trying to find a way to calculate the sum of all numbers between 1 to N using JavaScript.
 *     The following is the code I have tried so far but it doesn't seem to work.
 * *** Suppose we want to write a function that calculates the sum of all numbers from 1 up to (an including) some number n.
 *
 */

// Implementation 1:
function numberSum(N) {
  var total = 0;
  for (var i = 1; i <= N; i++) {
    total += i;
  }
  return total;
}

//   Implementation 2:
var res = (n * (n + 1)) / 2;


let t1 = performance.now();
numberSum(1000000000);
let t2 = performance.new();
console.log(`Time Elapsed: ${(t2-t1)/100} seconds.`);
