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

// hasPairWithSum(array, sum);

// Better way

function hasPairWithSum2(arr, sum) {
  const setFun = new Set();
  console.log("setFun ", setFun);
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    console.log(`arr ${i} `, arr[i]);
    console.log("setFun ", setFun);
    if (setFun.has(arr[i])) {
      console.log("setFun.has ", setFun.has(arr[i]));
      //   return true;
    }
    setFun.add(sum - arr[i]);
    console.log("setFun.add ", setFun.add(sum - arr[i]));
  }
  return false;
}

hasPairWithSum2(array, sum);
