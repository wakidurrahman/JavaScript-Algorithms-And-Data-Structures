// 004. Sum of an Array

/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
  // Write your code here
  const sum = ar.reduce((acct, curr) => {
    return acct + curr;
  }, 0);
  return sum;
}

// 004:

function diagonalDifference(arr) {
  const lengthOfArray = arr.length; // Length of the array
  let leftToRight = 0;
  let rightToLeft = 0;

  for (let i = 0; i < lengthOfArray; i++) {
    for (let j = 0; j < lengthOfArray; j++) {
      // Find The left-to-right diagonal
      if (i === j) {
        leftToRight += arr[i][j];
      }
      // Find The right to left diagonal diagonal
      if (i + j === lengthOfArray - 1) {
        rightToLeft += arr[i][j];
      }
    }
  }

  // calculate the absolute difference between the sums of its diagonals.
  return Math.abs(leftToRight - rightToLeft);
}

const myArray = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 0, 0],
  [4, 5, 6, 7],
];
diagonalDifference(myArray);
