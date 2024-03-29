//10-->5-->16 Linked list

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  //   append(value) {
  //     this.tail.next = {
  //       value: value,
  //       next: null,
  //     };
  //     this.tail = this.tail.next;
  //     this.length++;
  //   }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  //   prepend(value) {
  //     const newNode = {
  //       value: value,
  //       next: this.head,
  //     };
  //     this.head = newNode;
  //     this.length++;
  //     return this;
  //   }
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return console.log(array);
  }
  insert(index, value) {
    //check params
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    newNode.prev = leader;
    follower.prev = newNode;
    this.length++;
    console.log(this);
    return this;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  // remove(index) {
  //   if (index > this.length - 1) {
  //     console.log("index does not exist");
  //   }
  //   const leader = this.traverseToIndex(index - 1);
  //   const holdingPointer = leader.next.next;
  //   console.log(holdingPointer);
  //   if (index === this.length - 1) {
  //     leader.next = null;
  //     console.log("here");
  //   } else {
  //     leader.next = null;
  //     leader.next = holdingPointer;
  //     console.log("there");
  //   }
  //   this.length--;
  //   return this;
  // }

  remove(index) {
    //check params
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    unwantedNode.next.prev = leader;
    this.length--;
    return this;
  }

  reverse() {
    if (!this.head.next) {
      return this;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new doublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
// myLinkedList.remove(2);
// console.log(myLinkedList);
myLinkedList.reverse();
myLinkedList.printList();
