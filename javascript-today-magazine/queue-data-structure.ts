/**
 * A Queue is a linear structure which follows a particular order in which the operations are performed. 
 * The order is First In First Out (FIFO). 
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
