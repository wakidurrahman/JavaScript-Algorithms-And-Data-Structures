/**
 * The Stack Data Structure
 * A stack is a linear data structure that follows the principle of Last In First Out (LIFO).
 * This means the last element inserted inside the stack is removed first. 🔥🔥🔥
 * You can think of the stack data structure as the pile of plates on top of another.
 * Here's a JavaScript implementation of a stack data structure 👏👏👏
 */

class Stack {
  private data: (number | string | undefined)[] = [];
  // private totalItems: number;
  constructor() {
    this.data = [];
  }

  /**
   * push
   */
  public push(record: number | string) {
    this.data.push(record);
  }
  /**
   * pop
   */
  public pop() {
    return this.data.pop()
  }

  /**
   * peek
   */
  public peek() {
    return this.data[this.data.length - 1];
  }
}

const instanceOfStack = new Stack();
instanceOfStack.push(1);
instanceOfStack.push(2);
instanceOfStack.push(12);
instanceOfStack.push(14);
instanceOfStack.push(3);
console.log(instanceOfStack);
console.log(instanceOfStack.peek());
instanceOfStack.pop();
console.log(instanceOfStack);
