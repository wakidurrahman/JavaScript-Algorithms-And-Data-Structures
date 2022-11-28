// Naive
function hasPairWithSum(arr, sum) {
  const len = arr.length;
  let count = 0;

  for (let i = 0; i < len - 1; i++) {
    console.log("arr[i] ", arr[i]);
    for (let j = i + 1; j < len; j++) {
      console.log("arr[j] ", arr[j]);
      if (arr[i] + arr[j] === sum) {
        console.log("Sum ", arr[i] + arr[j]);
        count = count + 1; // Match count.
        console.log("count ", count);
        // return true;
      }
    }
  }

  return false;
}

const array = [6, 4, 3, 2, 1, 7];
const sum = 9;

hasPairWithSum(array, sum);
