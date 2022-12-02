// Google Question
/**
 * Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]: It should return 2
 *
 * Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]: It should return 1
 *
 * Given an array = [2, 3, 4, 5]: It should return undefined
 *
 */

// Solution 01:
function firstRecurringCharacter(array: number[]): number | undefined {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log('first : ', element);
    for (let j = i + 1; j < array.length; j++) {
      const element = array[j];
      console.log('Second : ', element);
      if (array[i] === array[j]) {
        console.log(array[i]);
        return array[i];
      }
    }
  }
  console.log('Nothing match : undefined');
  return undefined;
}

const array01 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const array02 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const array03 = [2, 3, 4, 5];
// Call function
firstRecurringCharacter(array01);
