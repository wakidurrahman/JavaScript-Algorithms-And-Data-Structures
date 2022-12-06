/**
 * Big-O complexities
 *
 * O(1) is constant time.
 * O(1) does not change with respect to input space.
 * Hence, O(1) is referred to as being constant time.
 * An example of an O(1) algorithm is accessing an item in the array by its index.
 *
 * O(n) is linear time.
 * O(n) is linear time and applies to algorithms that must do n operations in the worst-case scenario.
 *
 * O(n2) is quadratic time,
 *
 * O(n3) is cubic time.
 *
 * logarithmic time complexity
 * is printing elements that are a power of 2 between 2 and n


 */
// O(n) algorithm is printing numbers from 0 to n-1
function printLinerTime(n) {
    for (var i = 0; i < n; i++) {
        console.log(i);
    }
}
console.log(printLinerTime(100));
// O(n2) is quadratic time,
function printQuadraticTime(n) {
    for (var i = 0; i < n; i++) {
        // parent loop
        for (var j = 0; j < n; j++) {
            // children loop
            console.log(i, j);
        }
    }
} //
console.log(printQuadraticTime(10));
// O(n3) is cubic time
function printCubicTime(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i; j < array.length; j++) {
            for (var k = j; k < array.length; k++) {
                console.log(array[i], array[j], array[k]);
            }
        }
    }
}
var cubicTimeArray = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(printCubicTime(cubicTimeArray));
/**
 * The efficiency of logarithmic time complexities is apparent with large inputs such as a million items.
 * Although n is a million, exampleLogarithmic will print only 19 items because log2(1,000,000) = 19.9315686.
 */
function printLogarithmic(n) {
    for (var i = 2; i <= n; i = i * 2) {
        console.log(i);
    }
}
printLogarithmic(1000000);
