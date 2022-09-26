/**
 * Reverse a string. It's a common interview question, and it's quite simple.
 * However, if you really want to impress your interviewer, you'd be well-off to understand multiple solutions to the problem.
 * Rather than using built-in methods like ".reverse()" (which is fine, but you may be asked to neglect using it), 👍
 * demonstrate your ability to solve it in different ways.
 *
 * Here are three solutions to reversing a string in JavaScript.👏
 *
 *
 * Directions
 * Given a string, return a new string with the reversed order of characters
 */

// Solution 1:

function reverseStringSolutionOne(str: string) {
  return str.split("").reverse().join("");
}

// Solution 2:

function reverseStringSolutionTwo(str: string) {
  let reversed: string = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

// Solution 3:

function reverseStringSolutionThree(str: string) {
  return str.split("").reduce((rev, char) => char + rev, "");
}
