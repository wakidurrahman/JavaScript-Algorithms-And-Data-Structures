function bigOCalculationChallengeThree(items) {
  console.log(items[0]); // O(1)

  const middleIndex = Math.floor(items.length / 2);
  const index = 0;

  while (index < middleIndex) {
    // O(n/2)
    console.log(items[index]);
    index++;
  }

  for (let i = 0; i < 100; i++) {
    // O(100)
    console.log("hi");
  }
}

/**
 * O(1 + n/2 + 100 )
 * O(n/2 + 101) // Rule 2 : Drop constants
 * O(n ) // Rule 2 : Drop constants
 */

function compressBoxesTwice(boxes) {
  boxes.forEach((element) => {
    // O(n)
    console.log(element);
  });

  boxes.forEach((element) => {
    // O(n)
    console.log(element);
  });
}

/**
 * O(n + n)
 * O(n + n) // Drop the constants
 * O(n)
 */
