/**
 * Given 2 arrays,
 * create a function that let's a user know (true/false) whether these two arrays contain any common items.
 *
 * For example
 * const array1 = ['a', 'b', 'c', 'd', 'f'];
 * const array2 = ['z', 'y', 'x'];
 * Should return true
 *
 * 2 parameters - arrays - no size limit
 * return true or false
 */

const array1 = ["a", "b", "c", "d"];
const array2 = ["w", "x", "y", "z"];
// Way 1:
function containsCommonItem(users, items) {
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (users[i] === items[j]) return true;
    }
  }
  return false;
}

// O(users * items)
// O(1) - Space complexity

containsCommonItem(array1, array2);

// Way 2:

function containsCommonItem2(users, items) {
  // Loop through first array and create object where properties === items in the array
  // Can we assume always 2 params?

  let map = {};
  for (let i = 0; i < users.length; i++) {
    if (!map[users[i]]) {
      const item = users[i];
      map[item] = true;
    }
  }

  // Loop through second array and check if item in second array exist on created object.
  for (let j = 0; j < items.length; j++) {
    if (map[items[j]]) return true;
  }
  return false;
}

// O(a + b)
// O(users, items)
// O(users) - space complexity
