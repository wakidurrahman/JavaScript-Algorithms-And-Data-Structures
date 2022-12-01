class HashTableMain {
  public data: [] | [string, number | string][][] = [];
  constructor(size: number) {
    this.data = new Array(size);
  }

  private hash(key: string): number {
    let hash: number = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  /**
   * set
   */
  public set(key: string, value: number | string) {
    let address = this.hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  /**
   * Get
   */
  public get(key: string): undefined | string | number {
    const getAddress = this.hash(key);
    const currentBucket = this.data[getAddress];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  /**
   * keys
   */
  public keysOld(): (number | string)[] {
    const keysArray: (number | string)[] = [];
    console.log(this.data.length);
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data[i]);
      if (this.data[i]) {
        console.log(this.data[i][0]);
        console.log(this.data[i][0][0]);
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }

  public keys(): undefined | (string | [string, string | number])[] {
    if (!this.data.length) {
      return undefined;
    }
    let result: (string | [string, string | number])[] = [];
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0]);
          }
        } else {
          result.push(this.data[i][0]);
        }
      }
    }
    return result;
  }
}

// Example
const myHashTable01 = new HashTableMain(50);
myHashTable01.set('grapes', 10000);
myHashTable01.get('grapes');
myHashTable01.set('apples', 9);
myHashTable01.get('apples');
myHashTable01.set('banana', 'Nice foots');
myHashTable01.get('banana');
myHashTable01.keys();
console.log(myHashTable01.data);
console.log(myHashTable01.keys());

/**
 * 
 * 
 * 
 [
  [
    [ 'a', 'Nice foots' ],
    [ 'b', 'Nice foots' ],
    [ 'c', 'Nice foots' ],
    [ 'd', 'Nice foots' ],
    [ 'e', 'Nice foots' ],
    [ 'f', 'Nice foots' ],
    [ 'g', 'Nice foots' ]
  ],
  <2 empty items>,
  [ [ 'grapes', 10000 ], [ 'banana', 'Nice foots' ] ],
  <5 empty items>,
  [ [ 'apples', 9 ] ]
]
 */
