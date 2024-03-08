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

  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  head = prev;
  return head;
}

console.log(reverse(a));
