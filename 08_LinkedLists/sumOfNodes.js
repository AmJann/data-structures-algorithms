class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const two = new Node(2);
const eight = new Node(8);
const three = new Node(3);
const seven = new Node(7);

two.next = eight;
eight.next = three;
three.next = seven;

const sumOfNodesRecursive = (head) => {
  if (head === null) return 0;
  return head.val + sumOfNodesRecursive(head.next);
};

function sumOfNodes(head) {
  let sum = 0;
  let curr = head;
  while (curr !== null) {
    sum += curr.val;
    curr = curr.next;
  }
  return sum;
}
console.log(sumOfNodesRecursive(two));
