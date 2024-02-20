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
    const newNode = {
      value: value,
      next: null,
    };
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
    const newNode = {
      value: value,
      next: null,
    };
    this.head = newNode;
    this.length++;
    return this;
  }
}

const myLinkedList = new linkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList);
