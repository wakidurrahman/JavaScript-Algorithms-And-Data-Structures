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

  /**
   *
   * @returns {boolean}
   */
  isEmpty() {
    return !this.linkedList.head;
  }

  /**
   * Read the element at the front of the queue without removing it.
   * @returns {*}
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.linkedList.head.value;
  }

  /**
   * Add a new element to the end of the queue (the tail of the linked list).
   * This element will be processed after all elements ahead of it.
   * @param {*} value
   */
  enqueue(value) {
    this.linkedList.append(value);
  }

  /**
   * Remove the element at the front of the queue (the head of the linked list)
   * If the queue is empty, return null.
   * @returns {*}
   */
  dequeue() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  /**
   * @param [callback]
   * @returns {string}
   */
  toString(callback) {
    // Return string representation of the queue's linked list.
    return this.linkedList.toString(callback);
  }
}
