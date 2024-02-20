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
  }
}

class linkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
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
  insert(index, value) {}
}

const myLinkedList = new linkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
console.log(myLinkedList);
myLinkedList.printList();
