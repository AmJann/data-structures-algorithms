class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

//A -> B-> C-> D-> NULL

// printLinkedList = (head) => {
//   let current = head;
//   while (current != null) {
//     console.log(current.val);
//     current = current.next;
//   }
// };

//recursive solution
printLinkedList = (head) => {
  if (head === null) return;
  console.log(head.val);
  printLinkedList(head.next);
};

printLinkedList(a);

// const linkedListValues = (head) => {
//   const values = [];
//   let current = head;
//   while (current !== null) {
//     values.push(current.val);
//     current = current.next;
//   }
//   return values;
// };

const linkedListValues = (head) => {
  const values = [];
  fillValues(head, values);
  return values;
};

const fillValues = (head, values) => {
  if (head === null) return;
  values.push(head.val);
  fillValues(head.next, values);
};

console.log(linkedListValues(a));
