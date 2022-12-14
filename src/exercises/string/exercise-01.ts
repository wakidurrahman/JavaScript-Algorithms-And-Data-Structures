/**
 * JavaScript String Primitive
 * JavaScript's native String primitive comes with various common string functions.
 *
 * 1. String Access
 * 2. String Comparison
 * 3. String Search
 * 4. String Decomposition
 * 5. String Replace
 */

// 1. String Access
'Hello world'.charAt(1); // returns 'e';
'YouTube'.substring(1, 2); // returns 'o' : multiple-character access.
'YouTube'.substring(3, 7); // returns 'Tube'
'YouTube'.substring(1); // returns 'ouTube'

// 2. String Comparison
const a = 'a';
const b = 'b';

console.log(a < b); // Prints true;

const c = 'add';
const d = 'ab';

console.log(a < b); // Prints 'false'
