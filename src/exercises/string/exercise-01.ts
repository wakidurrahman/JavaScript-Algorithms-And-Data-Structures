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

// 3. String Search

'Red Dragon'.indexOf('Red'); // returns 0;
'Red Dragon'.indexOf('RedScale'); // returns -1
'Red Dragon'.indexOf('Dragon', 0); // returns 4

function existsInString(stringValue: string, search: string) {
  return stringValue.indexOf(search) !== -1;
}

console.log(existsInString('red', 'r')); // prints 'true';
console.log(existsInString('red', 'b')); // prints 'false';

const stringLong = 'He is my king from this day until his last day';
let count = 0;
let pos = stringLong.indexOf('a');

while (pos !== -1) {
  count++;
  pos = stringLong.indexOf('a', pos + 1);
}

console.log(count);

'Red Dragon'.startsWith('Red'); // Returns true
'Red Dragon'.endsWith('Dragon'); // Returns true

// 04. String Decomposition
const commaString = 'chicken,noodle,soup,broth';
commaString.split(','); // returns  ["chicken", "noodle", "soup", "broth"]

const onlyString = 'chicken';
onlyString.split('');

// 05. String Replace
// .replace(string, replaceString) replaces a specified string within a string variable with another string.
'Wizard of Oz'.replace('Wizard', 'Witch'); // 'Witch of Oz';
