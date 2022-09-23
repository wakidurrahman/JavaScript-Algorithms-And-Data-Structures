/**
 * A Queue is a linear structure which follows a particular order in which the operations are performed.
 * The order is First In First Out (FIFO).
 * A good example of a queue would simply be a line at a grocery store. The customer in line (queue) first, will leave first.
 *
 * Here's a JavaScript implementation of a Queue data structure. 🔥
 */
// A Queue Data Structure
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
        this.data = [];
    }
    /**
     * add
     */
    Queue.prototype.add = function (record) {
        this.data.unshift(record);
    };
    /**
     * remove
     */
    Queue.prototype.remove = function () {
        return this.data.pop();
    };
    return Queue;
}());
// Driver code
var arr = ["G", "e", "e", "k", "s", "f", "o",
    "r", "g", "e", "e", "k", "s"];
var q = new Queue();
q.add(1);
q.add(3);
q.add(4);
console.log(q);
q.remove();
console.log(q);
