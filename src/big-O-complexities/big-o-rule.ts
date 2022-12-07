/**
 * Big-O Rule
 *
 * 1. Coefficient rule
 * 2. Sum rule
 * 3. Product rule
 * 4. Transitive rule
 * 5. Polynomial rule
 * 6. Log of a power rule
 */

/**
 *
 * 1. Coefficient Rule.
 *
 * Coefficient simply requires you to ignore any non-input-size-related constants.
 * Coefficients in Big-O are negligible with large input sizes.
 * Any constants are negligible in Big-O notation.
 */

// Coefficient Rule example 01
function coefficientRuleOne(n: number) {
  let count: number = 0; // O(1)
  for (let i = 0; i < n; i++) {
    // O(n)
    count += 1; //  O(n)
  }
  return count; // O(1)
}

/**
 * BIG O Calculation
 * 1 + 1 ==> "O(1)" is 2 times
 * n + n  ==> "O(n)" is 2 times.
 * 2*2n
 * O(n) ==> Remove constants/
 */

function coefficientRuleOneTwo(limit: number) {
  const a: number = 5; // O(1)
  const b: number = 10; // O(1)
  const c: number = 50; // O(1)

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

/**
 * 2. Sum Rule
 * Imagine a master algorithm that involves two other algorithms.
 * The Big-O notation of that master algorithm is simply the sum of the other two Big-O notations.
 */

function sumRule(boxes: string[], items: number[]) {
  // For boxes iteration
  boxes.forEach(element => {
    // O(n)
    console.log(element);
  });

  // For items iteration
  items.forEach(element => {
    // O(n)
    console.log(element);
  });
}

/**
 * BIG O Calculation
 * O(n + n)
 * O( a + b )
 */

/**
 * Product Rule
 * The product rule simply states how Big-Os can be multiplied.
 */

function productRuleOne(boxes: string | number[]) {
  for (let i = 0; i < boxes.length; i++) {
    // O(n)
    for (let j = 0; j < boxes.length; j++) {
      // O(n)
      console.log(boxes[i], boxes[j]);
    }
  }
}

function productRuleTwo(n: number) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    count += 1; // O(n)
    for (var i = 0; i < 5 * n; i++) {
      count += 1; // O(n)
    }
  }
  return count;
}

/**
 * BIG O Calculation
 * O(n * n)
 * O(n^2)
 * O(n^2) is called Quadratic Time
 */
