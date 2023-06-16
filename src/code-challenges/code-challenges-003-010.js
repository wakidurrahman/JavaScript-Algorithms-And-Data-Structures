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
 */
