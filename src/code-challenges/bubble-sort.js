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
