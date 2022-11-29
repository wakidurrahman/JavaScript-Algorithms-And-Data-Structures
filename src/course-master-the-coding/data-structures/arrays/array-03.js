/**
 * Create a function that reverses a string
 * 'Hello World'
 * 'dlroW olleh'
 *
 */

function reverseSolution(text) {
  // check for valid input
  if (!text || text.length < 2 || typeof text !== 'string')
    return 'Something is wrong here!';

  const backWards = [];
  const totalItems = text.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backWards.push(text[i]);
  }
  return backWards.join(''); // convert array to string
}

function reverseSolution01(str) {
  // check for valid input
  if (!str || str.length < 2 || typeof str !== 'string')
    return 'Something is wrong here!';
  return str.split('').reverse().join('');
}

// Arrow function
const reverseSolution02 = (str) => str.split('').reverse().join('');

// Arrow function and Spread (...) Operator
const reverseSolution03 = (str) => [...str].reverse().join('');

console.log(reverseSolution('Single to Double Quote automatic replace it'));
console.log(reverseSolution01('Single to Double Quote automatic replace it'));
console.log(reverseSolution02('Single to Double Quote automatic replace it'));
console.log(reverseSolution03('Single to Double Quote automatic replace it'));
