class HashTable {
  constructor() {
    (this.object = {}), (this.size = 10000), (this.length = 50);
  }

  hashFunction(key) {
    //use sha256 as hash function (check google)
    return SHA256(
      key.toString() + key.toString().length + this.size + this.length
    ).toString();
  }
  

  addpair(key, values) {
    // const keyPair = this.hashFunction(key)
    // console.log(keyPair)
    this.object[key] = values;
  }
  search(key) {
    const keyPair = this.hashFunction(key);
    return this.object[key];
  }
}

let tables = new HashTable();
console.log(tables.hashFunction("apples"));

// console.log(tables.addpair("food", "Eba"));
// tables.addpair('fruits', 'apples')
// tables.addpair("jenny", 1213243);
// console.log(tables.object)
// console.log(tables.search('jenny'))
