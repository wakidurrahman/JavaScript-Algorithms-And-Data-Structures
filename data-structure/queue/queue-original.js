import LinkedList from "../linked-list/linked-list-original";

export default class Queue {
  constructor() {
    /**
     * We're going to implement Queue based on LinkedList since the two
     * structure are quite similar. Namely, they both operate mostly on
     * the element at the beginning and the end. Compare enqueue/dequeue
     * operations of Queue with append/deleteHead operations of LinkedList
     */
    this.linkedList = new LinkedList();
  }
}
