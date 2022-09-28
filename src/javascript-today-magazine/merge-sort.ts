/**
 * Merge sort
 */

type props = number[];

function mergeSort(array: props): (number| undefined)[] | any {
  if (array.length === 1) {
    return array;
  }
  const center: number = Math.floor(array.length / 2);
  const left: number[] = array.slice(0, center);
  const right: number[] = array.slice(center);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]) {
  const results: (number| undefined)[] = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
}

const mergeArray = [3, 4, 6, 9, 3, 1];
console.log(mergeSort(mergeArray));
