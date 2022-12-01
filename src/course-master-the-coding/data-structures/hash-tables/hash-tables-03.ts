class HashTableMain {
  private data: [] | [string, number | string][][] = [];
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
}

// Example
const myHashTable01 = new HashTableMain(50);
myHashTable01.set('grapes', 10000);
myHashTable01.get('grapes');
myHashTable01.set('apples', 9);
myHashTable01.get('apples');
myHashTable01.set('banana', 'Nice foots');
myHashTable01.get('banana');
