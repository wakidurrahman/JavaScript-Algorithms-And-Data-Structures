//001.  sum of two integers
function solveMeFirst(a: number, b: number) {
  // Hint: Type return a+b below
  return a + b;
}
// 002. Sum of an Array
// Calculate the Sum of an Array Using the reduce() Method in JavaScript
/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar: number[]): number {
  // Write your code here
  // parameter 'ar' ar: an array of integers
  const sum: number = ar.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  // Return the sum of the array
  return sum;
}

// 003: compare the triplets

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a: number[], b: number[]): number[] {
  const score: number[] = [];
  let pointOfAlice: number = 0;
  let pointOfBob: number = 0;
  // Alice and Bob
  // input a = [1, 2, 3] , b  = [3, 4, 1]
  // comparison a[i] > b[i], a[i] < b[i] , a[i] == b[i]
  // retrun array [1, 1] pointOfAlice and Bob score position

  for (let i = 0; i <= 2; i++) {
    if (a[i] == b[i]) {
      pointOfAlice;
      pointOfBob;
    } else if (a[i] > b[i]) {
      pointOfAlice += 1;
    } else if (a[i] < b[i]) {
      pointOfBob += 1;
    }
  }

  return score.concat(pointOfAlice, pointOfBob);
}

function compareTripletsVariationOne(a: number[], b: number[]): number[] {
  let pointOfAlice: number = 0;
  let pointOfBob: number = 0;
  // Alice and Bob
  // input a = [1, 2, 3] , b  = [3, 4, 1]
  // comparison a[i] > b[i], a[i] < b[i] , a[i] == b[i]
  // retrun array [1, 1] pointOfAlice and Bob score position

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      pointOfAlice += 1;
    } else if (a[i] < b[i]) {
      pointOfBob += 1;
    }
  }

  return [pointOfAlice, pointOfBob];
}
