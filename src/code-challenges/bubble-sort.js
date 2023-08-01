/**
 * 001: Explain How Bubble Sort works
 * Bubble Sort: is based on the idea of repeatedly comparing pairs of adjacent elements and
 * then swapping their positions if they are in the wrong order.
 * Bubble sort is a stable, in-place sort algorithm.
 */

// Normal
function bubbleSortVariationNormal(arr) {
  const len = arr.length - 1;
  let swaps;
  do {
    swaps = false;
    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        // start with the first two elements and sort them in ascending order. (Compare the element to check which one is greater).
        let temp = arr[i + 1]; // store second element for  swap
        arr[i + 1] = arr[i]; // Swap first element to second element
        arr[i] = temp; // // Swap second element to first element
        swaps = true; // true for loop continue until Compare not false condition
      }
    }
  } while (swaps);

  return arr;
}

bubbleSortVariationNormal([6, 5, 3, 1, 8, 7, 2, 4]);

// Recursively
const bubbleSortVariationRecursive = function (array, pointer = array.length - 1) {
  // Base check
  if (pointer === 0) {
    return array;
  }

  for (let i = 0; i < pointer; i++) {
    if (array[i] > array[i + 1]) {
      let temp = array[i + 1];
      array[i + 1] = array[i];
      array[i] = temp;
    }
  }

  // Recursive call on smaller portion of the array
  return bubbleSortVariationRecursive(array, pointer - 1);
};

bubbleSortVariationRecursive([6, 5, 3, 1, 8, 7, 2, 4]);

// 01: Exercise
const bubbleSortExercise = array => {
  let swaps;
  do {
    swaps = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        console.log('Swaps inner', swaps, array[i]);
        let tempStore = array[i + 1];
        array[i + 1] = array[i];
        array[i] = tempStore;
        swaps = true;
      }
    }
    console.log('Swaps Outer', swaps);
  } while (swaps);

  return array;
};

bubbleSortExercise([6, 5, 3, 1, 8, 7, 2, 4]);

// 02: Write a function called lucky_sevens which takes an array of integers and returns true if any three consecutive elements sum to 7.

function luckySevensExercise(array) {
  if (array.length < 3) {
    return 'This challenge is not possible';
    // console.log('This challenge is not possible');
  }
  for (let i = 2; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    if (array[i] + array[i - 1] + array[i - 2] === 7) {
      return true;
    }
  }
}

luckySevensExercise([2, 3, 4, 5, 6, 1, 2, 4, 5, 2, 1, 5]);

// 03

function simpleClockAngleExercises(num) {
  // total degrees 360
  // total minute 60
  // 60/360 = 6;
  // any number multiple by 6 will return angle
  return 6 * num;
}

simpleClockAngleExercises(30);

// 04;
function sumOfMultidimensionalArray(array) {
  // Store sum
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j];
    }
  }
  return sum;
}

sumOfMultidimensionalArray([[3, 2], [1], [4, 12]]);

// using reduce

function sumOfMultidimensionalArrayByReduce(array) {
  return array.reduce((t, e) => t.concat(e)).reduce((t, e) => t + e);
}

// 05;

function divisorsOfThree(low, high) {
  let output = [];
  for (let i = low; index < high; i++) {
    // simply store the current number in the store
    output.push(i);
    // check if the current number is evenly divisible by 3
    if (i % 3 === 0) output.push('div3');
  }
  return output;
}

function divisorsOfThree01(low, high) {
  let result = [];
  for (let i = low; i < high; i++) {
    if (i % 3 === 0) {
      result.push('div3');
    } else {
      result.push(i);
    }
  }
  return result;
}

divisorsOfThree(2, 15);
divisorsOfThree01(2, 15);

// 06;

function oddBallSub(numbers) {
  let result;
  for (let i = 0; i < numbers.length; i++) {
    // we divide by 2, and if there is a remainder then
    // the number must be odd so we add it to final_count
    if (numbers[i] % 2 === 1) {
      result += numbers[i];
    }
  }
  return result;
}
function oddBallSub01(numbers) {
  return numbers.reduce((total, item) => {
    console.log('all', item);
    if (item % 2 === 1) {
      console.log(item);
      return (total += item);
    }
    return total;
  }, 0);
}

oddBallSub01([8, 2, 3, 4, 5]);

// 07

function plusOneSumExercises(array) {
  return array.reduce((memo, num) => {
    return memo + num;
  }, array.length);
}
function plusOneSumExercises01(array) {
  let result = array.length; // sum of all number for 1 plus for each number.
  for (let i = 0; i < array.length; i++) {
    result = array[i];
  }
  return;
}

// 08
