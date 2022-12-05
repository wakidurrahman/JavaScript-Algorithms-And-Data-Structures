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
} // O(n^2)

// Solution 02:
function firstRecurringCharacter2(array: number[]): undefined | number {
  let KeysMap: { [key: number]: number } = {};
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    console.log(KeysMap);
    if (KeysMap[array[i]] !== undefined) {
      console.log(KeysMap[array[i]], i);
      return array[i];
    } else {
      KeysMap[array[i]] = i;
    }
  }
  return undefined;
} // O(n)

// Solution 02:
const firstRecurringCharacter3 = (array: number[]): undefined | number => {
  const set: Set<number> = new Set();
  for (let i = 0; i < array.length; i++) {
    if (set.has(array[i])) return array[i];

    set.add(array[i]);
  }
  return undefined;
}; // O(n)

const array01 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const array02 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const array03 = [2, 3, 4, 5];
// Call function
// firstRecurringCharacter(array01);
firstRecurringCharacter2(array02);
