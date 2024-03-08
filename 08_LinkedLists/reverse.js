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
/* 
iterate through list
use current, previous,and next/temp variables
point curr.next to previous
set curr to next and prev to curr

*/

function reverse(head) {
  let prev = null;
  let curr = head;
  let temp = curr.next;
  while (curr.next && curr !== null) {
    curr.next = prev;
    prev = curr;
    curr = temp;
    temp = curr.next;
  }

  if (curr.next === null) {
    curr.next = prev;
    head = curr;
  }
  return head;
}

console.log(reverse(a));
