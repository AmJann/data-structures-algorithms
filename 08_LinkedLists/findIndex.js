class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node("A");
let b = new Node("B");
let c = new Node("C");
let d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

let count = 0;
function findIndex(head, index) {
  if (count === index) return head.val;
  if (head === null) return false;
  count++;
  return findIndex(head.next, index);
}

console.log(findIndex(a, 2));
