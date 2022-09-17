/**
 * Selection Sort
 */

type props = number[] | string[];

const selectionSort = (array: props): number[] | string[] => {
  for (let i:number = 0; i < array.length; i++) {
    let indexOfMin:number = i;

    for (let j:number = i + 1; j < array.length; j++) {
      if (array[j] < array[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
        let lesser: string | number = array[indexOfMin];
        array[indexOfMin] = array[i];
        array[i] = lesser;
    }
  }
  return array;
};

const selection: props = [3, 4, 9, 3, 1, 2, 4, 5, 6,]
// selectionSort(selection);

console.log(selection);