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

// 004: Diagonal Difference

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

// 005: Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  const arrLength = arr.length;
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] === 0) {
      zeroCount += 1;
    } else if (arr[i] > 0) {
      positiveCount += 1;
    } else if (arr[i] < 0) {
      negativeCount += 1;
    }
  }
  const calculatePos = (positiveCount / arrLength).toFixed(6);
  const calculateNeg = (negativeCount / arrLength).toFixed(6);
  const calculateZero = (zeroCount / arrLength).toFixed(6);
  console.log(calculatePos + '\n' + calculateNeg + '\n' + calculateZero);
}
arrayOfIntegers = [-4, 3, -9, 0, 4, 1];
plusMinus(arrayOfIntegers);

/**
 * 006:
 * Given an array of bird sightings where every element represents a bird type id,
 * determine the id of the most frequently sighted type.
 * If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
 * @param {*} arr == [1, 4, 4, 4, 5, 3]
 * @returns smallest of their ids.
 */
function migratoryBirds(arr) {
  // Array Length  declaration
  const arrayLength = arr.length;
  // Story hash map object where object will be store like [1, 4, 4, 4, 5, 3] => {1: 1, 3: 1, 4: 3, 5: 1}
  let hashMap = {};

  // determine the id of the most frequently sighted type
  for (let i = 0; i < arrayLength; i++) {
    let num = arr[i]; // array value
    if (!hashMap[num]) {
      hashMap[num] = 1; // assign object key when object key is not available inside 'hashMap'
    } else {
      hashMap[num]++; // Increment object key value when keys are the same;
    }
  }
  let freq = 0; // Store Key value
  let freqNum = null; // Store Key
  // If more than 1 type has been spotted that maximum amount,
  // return the smallest of their ids.
  for (let num in hashMap) {
    if (hashMap[num] > freq) {
      freq = hashMap[num]; // Assign key value
      freqNum = num; // story key
    }
  }
  return freqNum; // return l
}

const arrayOfBirdSightings = [1, 4, 4, 4, 5, 3];

migratoryBirds(arrayOfBirdSightings);

// 007: Staircase detail

function staircase(n) {
  const line = Array(n + 1).fill(' ');
  for (let i = n - 1; i >= 0; i--) {
    line[i] = '#';
    console.log(line[i]);
  }
}

staircase(6);

/**
 * 008
 * Given five positive integers,
 * find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
 * Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 * @param {*} arr = [1, 2, 3, 7, 5, 9];
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Array Length
  const arrayLength = arr.length;
  // minimum sum
  let minSum = 0;
  // maximum sum
  let maxSum = 0;
  // sort an array of integers array.
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arrayLength; i++) {
    // Iterate starting from the 0 index and finish before the last index
    if (i < arrayLength - 1) {
      minSum += arr[i];
    }

    // Iterate starting from the 1 index and finish  the last index
    if (i > 0 && i < arrayLength) {
      maxSum += arr[i];
    }
  }

  console.log(`${minSum} ${maxSum}`);
}

const miniMaxSumArray = [1, 2, 3, 7, 5, 9];
miniMaxSum(miniMaxSumArray);

/**
 * 009
 * You are in charge of the cake for a child's birthday.
 * You have decided the cake will have one candle for each year of their total age.
 * They will only be able to blow out the tallest of the candles.
 * Count how many candles are tallest.
 *
 * Complete the 'birthdayCakeCandles' function below.
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  // array length
  const arrayLength = candles.length;
  // tallest  candle
  const arrayMaxValue = Math.max(...candles);
  // the number of candles that are tallest
  let tallestCandles = 0;
  for (let i = 0; i < arrayLength; i++) {
    // check array max value and iterate value are same
    if (candles[i] === arrayMaxValue) tallestCandles += 1;
  }
  // console.log(tallestCandles);
  return tallestCandles;
}

/**
 * 010
 * Given a year, Y , find the date of the 256th day of that year according to the official Russian calendar during that year.
 * Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is .
 *
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING
 *
 * The function accepts INTEGER year as parameter
 */

function dayOfProgrammer(year) {
  let day = 13; // by default

  // The transition from the Julian to Gregorian calendar system occurred in 1918
  if (year === 1918) {
    day += 13;
  }
  // From 1700 to 1917, Russia's official calendar was the Julian calendar;
  else if (year < 1918) {
    /**
     * In the Julian calendar,
     *
     * **leap years are divisible by 4
     */

    if (year % 4 === 0) {
      day = 12;
    } else {
      day = 13;
    }
  }
  // since 1919 they used the Gregorian calendar system.
  else if (year > 1918) {
    /**
     *  in the Gregorian calendar, leap years are either of the following:
     *  ** Divisible by 400.
     *  ** Divisible by 4 and not divisible by 100.
     */
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      day = 12;
    } else {
      day = 13;
    }
  }

  return `${day}.09.${year}`;
}
dayOfProgrammer(1917);
