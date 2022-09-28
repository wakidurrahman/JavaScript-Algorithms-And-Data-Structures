/**
 * In computer science, a queue is a particular kind of abstract data type or collection in which the entities in the collection are kept in order and the principle (or only) operations on the collection are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue. This makes the queue a First-In-First-Out (FIFO) data structure. In a FIFO data structure, the first element added to the queue will be the first one to be removed. This is equivalent to the requirement that once a new element is added, all elements that were added before have to be removed before the new element can be removed. Often a peek or front operation is also entered, returning the value of the front element without dequeuing it. A queue is an example of a linear data structure, or more abstractly a sequential collection.
 * A good example of a queue would simply be a line at a grocery store. The customer in line (queue) first, will leave first. 
 * 
 * Here's a JavaScript implementation of a Queue data structure. 🔥
 */

// A Queue Data Structure

class Queue {
    private data = []
    constructor() {
        this.data = []
    }

    /**
     * add
     */
    public add(record: number| string | never) {
        this.data.unshift(record);
    }

    /**
     * remove
     */
    public remove() {
        return this.data.pop();
    }

}

 // Driver code
 const arr = ["G", "e", "e", "k", "s", "f", "o",
 "r", "g", "e", "e", "k", "s"];

 const q = new Queue();
 q.add(1);
 q.add(3);
 q.add(4);
 console.log(q);
 q.remove();
 console.log(q);
