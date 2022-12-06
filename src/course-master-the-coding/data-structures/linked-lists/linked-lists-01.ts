// add a method remove() to the linked list that deletes a node to the specified index.

type Tail = {
  value: string | number;
  next: null;
};

type Head = {
  value: string | number;
  next: null;
};

class LinkedList {
  head: { value: string | number; next: null };
  tail: { value: string | number; next: Tail | null };
  length: number;
  constructor(value: any) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value: number) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value: number) {
    const newNode: any = {
      value: value,
      next: null,
    };

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array: (string | number)[] = [];
    let currentNode: any = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index: number, value: number) {
    //Check for proper parameters;
    if (index >= this.length) {
      console.log('yes');
      return this.append(value);
    }

    const newNode: any = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index: number) {
    //Check parameters
    let counter = 0;
    let currentNode: any = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index: number) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(2);
