// Calculate the Sum of an Array Using the reduce() Method in JavaScript
/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function SimpleArraySum(ar: number[]): number {
  // Write your code here
  // parameter 'ar' ar: an array of integers
  const sum: number = ar.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  // Return the sum of the array
  return sum;
}
