const { LLData } = require("./LLData");

exports.LList = class {
    constructor() {
        this.head = null; //ссылка на узел в начале списка;
        this.tail = null; //ссылка на узел в конце списка.
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        return this.tail;
    }

    add(value) {
        let newNode = new LLData(value);
        if (this.tail) this.tail.next = newNode;
        this.tail = newNode;
        if (!this.head) this.head = newNode;
    }

    addFromArray(arrayOfData) {
        // arrayOfData.map((item) => this.add(item));
        arrayOfData.forEach(arrayOfData => this.add(arrayOfData));
    }

    remove(value) {
        if (!this.head) return null;

        let currnetNode = this.head;

        if (this.head.data === value) {
            this.head = this.head.next;
            return true;
        }
        while (currnetNode.next) {
            if (currnetNode.next.data === value) {
                if (currnetNode.next === this.tail)
                    this.tail = currnetNode;
                currnetNode.next = currnetNode.next.next;
                return true;
            } else currnetNode = currnetNode.next;
        }
        return false;
    }

    removeAll(value) {
        if (!this.head) return null;

        let currentNode = this.head;

        if (currentNode !== null) {
            if (this.head.data === value) this.head = this.head.next;
            while (currentNode.next) {
                if (currentNode.next.data === value) currentNode.next = currentNode.next.next;
                else currentNode = currentNode.next;
            }
        }
        if (this.tail.data === value) this.tail = currentNode;
    }

    contains(value) {
        if (!this.head) return null;
        if (value === undefined) return null;

        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.data === value) return true;
            currentNode = currentNode.next;
        }
        return false;
    }

    clear() {
        this.head = null;
        this.tail = null;
    }

    count() {
        if (!this.head) return null;

        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            currentNode = currentNode.next;
            count++;
        } 
        return count;
    }

    toString() {
        let arr = [];
        let currentNode = this.head;
        while (currentNode) {
            arr.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return arr.join(', ');
    }

    getIterator() {
        return this[Symbol.iterator]();
    }

    filter(callback) {
        let newList = Object.assign(Object.create(this), JSON.parse(JSON.stringify(this)));
        let currentNode = newList.head;
        while (currentNode) {
            if (!callback(currentNode.data)) newList.remove(currentNode.data);
            currentNode = currentNode.next;
        }
        return newList;
    }

    [Symbol.iterator]() {
        let currnetNode = this.head;
        return {
            next() {
                let value, done = true;
                if (currnetNode !== null) {
                    value = currnetNode.data;
                    done = false;
                    currnetNode = currnetNode.next;
                }
                return {
                    value: value, done: done
                }
            }
        }
    }
    // *[Symbol.iterator]() {
    //     let currentNode = this.head;
    //     while (currentNode !== null) {
    //         yield currentNode.data;
    //         currentNode = currentNode.next;
    //     }
    // }
    // result = this[Symbol.iterator]();
}

const {LList} = require("./LList");

const list = new LList();

list.addFromArray([100, 1, 2, 3, 100, 4, 5, 100]);

list.add(10);

const onlySmallList = list.filter((data) => {
  return data < 18;
});

let sumOfAll = 0;

for (const data of list) {
  sumOfAll += data;
}

console.log([...list]); // [ 100, 1,   2,  3, 100, 4, 5, 100, 10 ]
console.log([...onlySmallList]); // [ 1, 2, 3, 4, 5, 10 ]
console.log(sumOfAll); // 325
console.log(list.contains(10)); // true
console.log(list.contains(22)); // false

list.clear()

console.log([...list]); // []


list.addFromArray([10, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 5, 9, 9, 9]);
list.add(10)

console.log('getFirst: ', list.getFirst()); //getFirst
console.log('getLast: ', list.getLast()); //getLast
console.log([...list]);
console.log('remove: ', list.remove(5)); //remove [10, 9, 9, 9, 8, 7, 6, 4, 3, 2, 1, 0, 5, 9, 9, 9] = delete 5
list.removeAll(10);//removeAll [10, 8, 7, 6, 4, 3, 2, 1, 0, 5] = delete 9
console.log('contains: ', list.contains(4)); // contains = true
console.log('contains: ', list.contains(100)); //contains = false
console.log('count: ', list.count()); //count
console.log('toString: ', list.toString()); // toString = ,
list.getIterator(); //getIterator
console.log([...list]);
list.clear()

console.log([...list]); // []
