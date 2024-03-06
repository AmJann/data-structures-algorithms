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

function findValue(head, val) {
  let curr = head;

  while (curr !== null) {
    if (val === curr.val) {
      return true;
    }
    curr = curr.next;
  }
  return false;
}

const linkedListFind = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return linkedListFind(head.next, target);
};

console.log(linkedListFind(a, "C"));

console.log(findValue(a, "F"));
