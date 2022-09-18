/**
 * Write a function that returns the number of vowels in a string.
 *
 * Another common interview question: Write a function that returns the number of vowels in a string.
 * Here we have two solutions,
 * one makes use of a regular expression, and
 * another uses an iterative approach, a for-of loop.
 *
 * Used in a string. Vowels are the characters "a", "e", "i", "o" and "u"
 */
// Solution 1: using regular expression
// function vowelsHandleByReg(characters: string) {
//   const matches = characters.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }
// Solution 2: uses an iterative approach, a for-of loop.
function vowelsHandleByIterative(characters) {
    var count = 0;
    var checker = ["a", "e", "i", "0", "u"];
    for (var _i = 0, _a = characters.toLowerCase(); _i < _a.length; _i++) {
        var char = _a[_i];
        if (checker.includes(char)) {
            count++;
        }
    }
    return count;
}
// console.log(vowelsHandleByReg("Wakidur"));
console.log(vowelsHandleByIterative("Munni"));
