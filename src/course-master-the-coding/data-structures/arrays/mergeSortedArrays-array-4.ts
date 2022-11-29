export function mergeSortedArrays(
  firstArray: number[],
  secondArray: number[]
): number[] {
  const mergedArray: number[] = []; // allocate empty array.
  let firstArrayItem: number | undefined = firstArray[0]; // get  Array firstArray  Index 0 value
  console.log(firstArrayItem);
  let secondArrayItem: number | undefined = secondArray[0]; // Get Array  Index 0 value.
  console.log(secondArrayItem);
  let i: number = 1;
  let j: number = 1;

  // We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
  if (firstArray.length === 0) return secondArray;
  if (secondArray.length === 0) return firstArray;

  while (firstArrayItem || secondArrayItem) {
    console.log(firstArrayItem, secondArrayItem);
    if (secondArrayItem === undefined || firstArrayItem < secondArrayItem) {
      mergedArray.push(firstArrayItem);
      firstArrayItem = firstArray[i];
      i++;
    } else {
      mergedArray.push(secondArrayItem);
      secondArrayItem = secondArray[j];
      j++;
    }
  }

  return mergedArray;
}
// mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);
console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));
