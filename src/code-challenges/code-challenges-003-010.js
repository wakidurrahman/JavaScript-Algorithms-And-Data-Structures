/**
 * Q003: Simple clock angle
 * Problem
 * You will be given a number N that represents where the minute hand currently is on a clock.
 * Your program should return the angle that is formed by the minute hand and the 12 o'clock mark on the clock.
 */

function simpleClockAngle(number) {
  // we got 6 because 360(degree)/60(minute) = 6;
  // 360 represents the full number of a degrees in a circle and
  // 60 is the number of minutes on a clock, so dividing these two numbers
  // gives us the number of degrees for one minute
  return 6 * number;
}

/**
 * Q004: Sum of several arrays
 * Problem
 * You will be given an array of several arrays that each contain integers and your goal is to write a function that will sum up all the numbers in all the arrays.
 * For example, if the input is [[3, 2], [1], [4, 12]] then your program should output 22 because 3 + 2 + 1 + 4 + 12 = 22. Solve without and with reduce.
 */

// Normal
function multiDimensionalSumOfSeveralArrayVariationNormal(array) {
  // Store our final answer
  let sum = 0;
  // Loop through entire array.
  for (let i = 0; i < array.length; i++) {
    // Loop through each inner array.
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j];
    }
  }

  return sum;
}

multiDimensionalSumOfSeveralArrayVariationNormal([[3, 2], [1], [4, 12]]);
// reduce

function multiDimensionalSumOfSeveralArrayVariationReduce(array) {
  return array.reduce((t, e) => t.concat(e)).reduce((t, e) => t + e);
}
multiDimensionalSumOfSeveralArrayVariationReduce([[3, 2], [1], [4, 12]]);

/**
 * Q005: Test divisors of three
 * You will be given 2 parameters: a low and high number.
 * Your goal is to print all numbers between low and high, and for each of these numbers print whether or not the number is divisible by 3.
 * If the number is divisible by 3, print the word "div3" directly after the number.
 */

function testDivisors(low, high) {
  // we'll store all numbers and strings within an array
  // instead of printing directly to the console.
  let output = [];

  for (let i = low; i <= high; i++) {
    // simply store the current number in the output array
    output.push(i);

    // Check if the current number is evenly divisible by 3
    if (i % 3 === 0) output.push('div3');
  }

  // return all numbers and strings.
  return output;
}

testDivisors(2, 10);

/**
 * Q006: Oddball sum
 * Write a function called oddball_sum which takes in a list of numbers and returns the sum of all the odd elements.
 * Try to solve with and without reduce function.
 *
 */

function oddBallSumVariationNormal(numbs) {
  // Final count of all odd numbers added up
  let finalCount = 0;

  // Loop through entire list
  for (let i = 0; i < numbs.length; i++) {
    // we divide by 2, and if there is a remainder then
    // the number must be odd so we add it to finalCount.

    if (numbs[i] % 2 === 1) {
      finalCount += numbs[i];
    }
  }

  return finalCount;
}

oddBallSumVariationNormal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

function oddBallSumVariationReduce(numbs) {
  return numbs.reduce((total, item) => {
    if (item % 2 === 1) {
      return (total += item);
    }

    return total;
  }, 0);
}

oddBallSumVariationReduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
