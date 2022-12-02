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
function firstRecurringCharacter(array) {
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    console.log('first : ', element);
    for (var j = i + 1; j < array.length; j++) {
      var element_1 = array[j];
      console.log('Second : ', element_1);
      if (array[i] === array[j]) {
        console.log(array[i]);
        return array[i];
      }
    }
  }
  console.log('Nothing match : undefined');
  return undefined;
}
// Solution 02:
function firstRecurringCharacter2(array) {
  var KeysMap = {};
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    console.log(element);
    console.log(KeysMap);
    if (KeysMap[array[i]] !== undefined) {
      // if (KeysMap[array[i]] !== i) {
      console.log(KeysMap[array[i]], i);
      console.log(array[i]);
      return array[i];
    } else {
      KeysMap[array[i]] = i;
    }
  }

  return undefined;
}
var array01 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
var array02 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
var array03 = [2, 3, 4, 5];
// Call function
// firstRecurringCharacter(array01);
firstRecurringCharacter2(array02);
