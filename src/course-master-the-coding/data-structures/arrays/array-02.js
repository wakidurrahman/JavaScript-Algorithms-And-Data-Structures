/**
 * DataStructure: Array Implementation
 * Arrays in JavaScript are just objects with integer based keys that act like indexes,
 */

class Array01 {
  constructor() {
    this.length = 0; // Declare length of the array
    this.data = {}; // Store date inside array.
  }

  // Get Method O(1)
  get(index) {
    return this.data[index];
  }

  // Push method O(1)
  push(item) {
    this.data[this.length] = item; // Insert item into last index.
    this.length++; // Increment index.
    return this.data; // return array
  }

  // Pop method O(1)
  pop() {
    const lastItem = this.data[this.length - 1]; // last index
    delete this.data[this.length - 1]; // delete last index
    this.length--; // decrease length of the array.
    return lastItem; // return last item
  }

  // Delete method O(n)
  deleteAtIndex(index) {
    const item = this.data[index]; // track item specific index
    this.shiftItems(index); // ShiftItem place.
    return item;
  }

  // Private function.
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    console.log(this.data[this.length - 1]);
    delete this.data[this.length - 1]; // delete last index of the array
    this.length--;
  }
}

const myArray = new Array01();
myArray.push("hi");
myArray.push("you");
myArray.push("!");
myArray.pop();
myArray.deleteAtIndex(0);
myArray.push("are");
myArray.push("nice");
myArray.shiftItems(0);
console.log(myArray);
