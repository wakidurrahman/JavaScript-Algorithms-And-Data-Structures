/**
 * Bubble sort
 */
function handleBubbleSort(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                var lesser = array[j + 1];
                array[j + 1] = array[j];
                array[j] = lesser;
            }
        }
    }
    return array;
}
var bubbleSortSample = [3, 4, 9, 3, 1];
var bubbleSortSampleLong = [3, 4, 9, 3, 1, 10, 11, 40, 6, 4, 3, 1, 3, 4, 5, 8];
// bubbleSort(bubble);
console.log("Hello ", bubbleSortSample);
console.log(handleBubbleSort(bubbleSortSample));
