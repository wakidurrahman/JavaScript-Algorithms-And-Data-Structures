// Log all Pairs of array

const boxes = ["a", "b", "c", "d", "e", "f", "g"];
function logAllPairsOfBoxes(boxes) {
  for (let i = 0; i < boxes.length; i++) {
    for (let j = 0; j < boxes.length; j++) {
      console.log(boxes[i], boxes[j]);
    }
  }
}

// Print boxes combinations.
logAllPairsOfBoxes(boxes);

// Using ES5 syntax

function logAllPairsOfBoxesEs5(boxes) {
  boxes.forEach((firstBox) => {
    boxes.forEach((secondBox) => {
      console.log(firstBox, secondBox);
    });
  });
}

/**
 * O(n * n)
 * O(n^2)
 * O(n^2) is called Quadratic Time
 */
