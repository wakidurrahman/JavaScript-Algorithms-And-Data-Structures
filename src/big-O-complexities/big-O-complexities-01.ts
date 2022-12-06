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


 */

// O(n) algorithm is printing numbers from 0 to n-1
function printLinerTime(n: number) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

console.log(printLinerTime(100));

// O(n2) is quadratic time,

function printQuadraticTime(n: number) {
  for (let i = 0; i < n; i++) {
    // parent loop
    for (let j = 0; j < n; j++) {
      // children loop
      console.log(i, j);
    }
  }
}

console.log(printQuadraticTime(10));
