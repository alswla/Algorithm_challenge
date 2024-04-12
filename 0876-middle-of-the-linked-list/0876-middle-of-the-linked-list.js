/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function(head) {
  const sequence = [];
  let currentNode = head;
  
  while (currentNode !== null) {
    sequence.push(currentNode);
    currentNode = currentNode.next;
  }
  
  const middle = Math.floor(sequence.length / 2);
  
  return sequence[middle];
};
