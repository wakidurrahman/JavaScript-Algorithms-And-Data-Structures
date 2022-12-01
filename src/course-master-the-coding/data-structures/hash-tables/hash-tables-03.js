var HashTableMain = /** @class */ (function () {
    function HashTableMain(size) {
        this.data = [];
        this.data = new Array(size);
    }
    HashTableMain.prototype.hash = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    };
    /**
     * set
     */
    HashTableMain.prototype.set = function (key, value) {
        var address = this.hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    };
    /**
     * Get
     */
    HashTableMain.prototype.get = function (key) {
        var getAddress = this.hash(key);
        var currentBucket = this.data[getAddress];
        if (currentBucket) {
            for (var i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    };
    /**
     * keys
     */
    HashTableMain.prototype.keys = function () {
        var keysArray = [];
        console.log(this.data.length);
        for (var i = 0; i < this.data.length; i++) {
            console.log(this.data[i]);
            if (this.data[i]) {
                console.log(this.data[i][0]);
                console.log(this.data[i][0][0]);
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    };
    return HashTableMain;
}());
// Example
var myHashTable01 = new HashTableMain(50);
myHashTable01.set('grapes', 10000);
myHashTable01.get('grapes');
myHashTable01.set('apples', 9);
myHashTable01.get('apples');
myHashTable01.set('banana', 'Nice foots');
myHashTable01.get('banana');
myHashTable01.keys();
console.log(myHashTable01.data);
