// What is the Big O of the below function? (Hint, you may want to go line by line)

function bigOCalculationChallengeOne(input) {
  let a = 10; // O(1) => 1
  a = 50 + 3; // O(1) => 2

  for (let i = 0; i < input.length; i++) {
    // O(n) /O(input) /O(x) => 1
    printHello(); // O(n) => 2
    console.log(a);
    const stranger = true; // O(n) => 3
    a++; // Number of Operations O(n) => 4
  }
  console.log(a);
  return a; // O(1) => 3
}

/**
 * BIG O Calculation
 * 3 "O(1)"
 * n + n + n + n "O(n)"
 * 3 + 4n
 * BIG O(3 + 4n)
 */

function printHello() {
  console.log("Hello World");
}

const inputArray = new Array(100).fill("a");

bigOCalculationChallengeOne(inputArray);
