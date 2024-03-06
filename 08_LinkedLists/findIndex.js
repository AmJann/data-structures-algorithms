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

//set count
//create function that accepts head and index as arguments
//check if count is equal to head, if so return head.val
//if head is equal to null return null
//final return statment should be a call to the same function to make it recursive

let count = 0;
function findIndex(head, index) {
  if (count === index) return head.val;
  if (head === null) return null;
  count++;
  return findIndex(head.next, index);
}

console.log(findIndex(a, 3));

//create a function that accepts head and index as arguments
//create a count variable set to 0
//create a current variable set to head
//if current is equal to null return null
//while current is not equal to null, check if index matches count
//if match return current.val
//else current = current.next

function FindIndexUsingWhile(head, index) {
  let count = 0;
  let current = head;
  if (current === null) {
    return null;
  }
  while (current !== null) {
    if (index === count) {
      return current.val;
    }
    count++;
    current = current.next;
  }
}

console.log(FindIndexUsingWhile(a, 3));
