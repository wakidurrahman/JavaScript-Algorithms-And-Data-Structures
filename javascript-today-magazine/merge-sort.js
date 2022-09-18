/**
 * Merge sort
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    var center = Math.floor(array.length / 2);
    var left = array.slice(0, center);
    var right = array.slice(center);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    var results = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        }
        else {
            results.push(right.shift());
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], results, true), left, true), right, true);
}
var mergeArray = [3, 4, 6, 9, 3, 1];
console.log(mergeSort(mergeArray));
