// What is the Big O of the below function?
// Hint, you may want to go line by line

function bigOCalculationChallengeTwo(limit) {
  const a = 5; // O(1)
  const b = 10; // O(1)
  const c = 50; // O(1)

  for (let i = 0; i < limit; i++) {
    // O(n) ***TODO:If we include for loop
    let x = i + 1; // O(n)
    let y = i + 1; // O(n)
    let z = i + 1; // O(n)
  }

  for (let j = 0; j < limit; j++) {
    // O(n) ***TODO:If we include for loop
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }

  const whoAmI = "I don't Know"; // O(1)
}

/**
 * BIG O Calculation
 * 4 => "O(1)" Four big O
 * 7 => "O(n)" Seven big O n
 * n + n + n + n + n + n + n  => "O(n)"
 * 4 + 7n
 *
 * BIG O(4 + 7n) TODO: if we calculate for loop step
 * O(4 + 7n) === O(n) equivalence to O(n)
 * n + n + n + n + n   => "O(n)"
 * BIG O(4 + 5n) TODO: no for loop
 * O(4 + 5n) === O(n) equivalence to O(n)
 */

bigOCalculationChallengeTwo(12);
