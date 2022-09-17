/**
 * Bubble sort
 */

type bubbleProps = number[];


function handleBubbleSort(array: bubbleProps): number[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const lesser = array[j + 1];
        array[j + 1] = array[j];
        array[j] = lesser;
      }
    }
  }
  return array;
}

const bubbleSortSample:bubbleProps= [3, 4, 9, 3, 1];
const bubbleSortSampleLong:bubbleProps = [3, 4, 9, 3, 1, 10, 11, 40, 6, 4, 3, 1, 3, 4, 5, 8];

// bubbleSort(bubble);
console.log("Hello " , bubbleSortSample)
console.log(handleBubbleSort(bubbleSortSample))
