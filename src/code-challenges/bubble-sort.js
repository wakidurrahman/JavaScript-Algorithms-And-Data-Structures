/**
 * 001: Bubble Sort: is based on the idea of repeatedly comparing pairs of adjacent elements and
 * then swapping their positions if they are in the wrong order.
 * Bubble sort is a stable, in-place sort algorithm.
 */

// Normal
function bubbleSortVariationNormal(arr) {
  let swaps;
  do {
    swaps = false;
    for (let i = 0; i < arr.length - 1; i++) {
      const element = arr[i];
      console.log(element);
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
