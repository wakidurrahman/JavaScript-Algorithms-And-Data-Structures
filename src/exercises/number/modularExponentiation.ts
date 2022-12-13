/**
 * 1.
 * Given three numbers x, y, and p, compute (xˆy) % p. (This is modular exponentiation.)
 * Here, x is the base, y is exponent, and p is the modulus.
 * Modular exponentiation is a type of exponentiation performed over a modulus,
 * which is useful in computer science and used in the field of public-key encryption algorithms
 *
 * @param base
 * @param exponent
 * @param modulus
 * @returns
 */
function modularExponentiation(base: number, exponent: number, modulus: number): number {
  return Math.pow(base, exponent) % modulus;
}

function modularExponentiation01(base: number, exponent: number, modulus: number): number {
  if (modulus == 1) return 0;

  let value = 1;

  for (let i = 0; i < exponent; i++) {
    value = (value * base) % modulus;
  }

  return value;
}

/**
 * 2.
 * Print all primes lass than n.
 *
 * Simply iterate from 0 to n and print any prime numbers where isPrime() evaluates to true.
 *
 */

function allPrimesLessThanN(n: number): void {
  for (let i = 0; i < n; i++) {
    if (isPrimeNumber(i)) {
      console.log(i);
    }
  }
} // time complexity of O(n sqrt(n)) is run n times.

function isPrimeNumber(number: number): boolean {
  if (number <= 1) return false;
  if (number <= 3) return true;

  // This is checked so that we can skip
  // middle five number in below loop

  for (let i = 5; i * i < number; i = i + 6) {
    if (number % i == 0 || number % (i + 2) == 0) {
      return false;
    }
  }

  return true;
} // time complexity of O(sqrt(n)) is run n times.

/**
 * 3.
 *
 * Check for a set of prime factors.
 *
 */

function maxDivide(number: number, divisor: number) {
  while (number % divisor == 0) {
    number /= divisor;
  }
  return number;
}
