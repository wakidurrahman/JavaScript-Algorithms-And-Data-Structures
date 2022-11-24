// Rule 4: Drop Non Dominant
function printAllNumbersThenAllPairSums(numbers) {
  console.log("These are the numbers: ");
  numbers.forEach((element) => {
    console.log(element);
  });

  console.log("And these are their sums: ");

  numbers.forEach((firstNumber) => {
    numbers.forEach((secondNumber) => {
      console.log(firstNumber + secondNumber);
    });
  });
}

// Number array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Print output
printAllNumbersThenAllPairSums(numbers);

/**
 * O(n + n^2)
 * O(n^2) Drop non dominants
 *
 * for example
 * O(x^2+3x+100+x/2)
 * O(x^5x+100+x/2)
 * O(x^5x+100+x/2)
 * O(n^2)
 */
