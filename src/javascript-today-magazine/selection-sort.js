/**
 * Selection Sort
 */
var selectionSort = function (array) {
    for (var i = 0; i < array.length; i++) {
        var indexOfMin = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexOfMin]) {
                indexOfMin = j;
            }
        }
        if (indexOfMin !== i) {
            var lesser = array[indexOfMin];
            array[indexOfMin] = array[i];
            array[i] = lesser;
        }
    }
    return array;
};
var selection = [3, 4, 9, 3, 1, 2, 4, 5, 6,];
// selectionSort(selection);
console.log(selectionSort(selection));
