/**
 *
 * Number Algorithms
 * One of the most discussed algorithms involving numbers is for testing whether a number is a prime number..
 * @returns
 */
// Algorithm 01:  A primality test can be done by iterating from 2 to n, checking whether modulus division (remainder) is equal to zero.
// 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97
function isPrimeOne(n: number) {
  if (n <= 1) {
    return false;
  }

  // check from 2 to n - 1;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
} // Time complexity: O(n)

function isPrimeTwo(n: number) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  // This is checked so that we can skip
  // Middle five numbers in below loop

  if (n % 2 == 0 || n % 3 == 0) return false;

  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }
  return true;
} // O(sqrt(n))

function primeFactors(n: number) {
  // Print the number of 2s that divide n
  while (n % 2 == 0) {
    console.log(2);
    n = n / 2;
  }

  // n must be odd at this point. So we can skip one element
  // note i = i + 2;
  for (let i = 3; i * i <= n; i = i + 2) {
    // While i divides n, print i and divide n
    while (n % i == 0) {
      console.log(i);
      n = n / i;
    }
  }
  // This condition is to handle the case when n is a prime number greater than 2
  if (n > 2) {
    console.log(n);
  }
} // O(sqrt(n))

// Random Number Generator
Math.random() * 100; // floats between 0 and 100;
Math.random() * 25 + 5; // floats between 5 and 30
Math.random() * 10 - 100; // floats between -100 and -90
