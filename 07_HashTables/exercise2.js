let array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
let array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
      // console.log(this.data);
      // console.log(address);
    }
  }

  get(key) {
    const index = this._hash(key);
    return this.data[index];
  }
}

const myHashTable = new HashTable(3);

myHashTable.set("apple", 10);
// return first recurring character
myHashTable.set("grapes", true);
// let item = myHashTable.get("grapes");
myHashTable.get("grapes");

for (const item of arr) {
  let number = myHashTable.get(item);
  if (number) {
    return "item", number[0][0];
  } else {
    myHashTable.set(item, true);
  }
}

function findFirstPair2(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      return arr[i];
    } else {
      map[arr[i]] = i;
    }
    // console.log(map);
  }
  return undefined;
}

console.log(findFirstPair2(array));
