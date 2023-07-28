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

//containsCommonItem(array1, array2);

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

// Way 3
function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

containsCommonItem(array1, array2);
containsCommonItem2(array1, array2);
containsCommonItem3(array1, array2);


Std_arr.sort((a, b) => a.name.localeCompare(b.name));

function orderByName(users) {
  // // Sort the array of objects based on the 'name' property
  users.sort((a, b) => a.name.localeCompare(b.name));
}

orderByName([{name: "Charles"}, {name: "Alice"}, {name: "bob"}])
# => [{name: "Alice"}, {name: "bob"}, {name: "Charles"}]



const getReferrers = function (user_list) {
  const users = JSON.parse(JSON.stringify(user_list));
  let referrerUsers = [];
  for (i = 0; i < users.length; i++) {
    users[i].referrer = users.find( (user) => {
      if (user.id == users[i]["referrerId"]) {
        return true;
      }
    })
    users[i].referrer = users[i].referrer && users[i].referrer.name || null;
    referrerUsers.push(users[i])
  }
  
  return referrerUsers;
}




getReferrers([
  { id: 1, referrerId: 1, name: "Joe" },
  { id: 2, referrerId: 2, name: "Jane" },
  { id: 3, referrerId: null, name: "Liane" },
  { id: 4, referrerId: null, name: "Aane" },
])
Please write a program to build a list containing the numbers from 1 to 100, 
except that multiples of 3 are replaced by "Fizz", 
the multiples of 5 are removed, 
and multiples of 15 are replaced by "FizzBuzz".


function listOfContainWithFizzBuzz() {
  // Storage of list.
  const lists = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) { // multiples of 15 are replaced by "FizzBuzz"
      lists.push("FizzBuzz");
    } else if (i % 3 === 0) { // multiples of 3 are replaced by "Fizz"
      lists.push("Fizz");
    } else if (i % 5 === 0) { // multiples of 5 are removed
      continue;
    } else {
      lists.push(i); // Normal case without apply any logic.
    }
  }

  return lists;
}

const result = buildList();
console.log(result);


