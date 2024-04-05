/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
  if (!head || !head.next) {
      return false;
  }
  
  let currentValue = head;
  let nextValue = head;
  
  while (nextValue && nextValue.next) {
    currentValue = currentValue.next;
    nextValue = nextValue.next.next;
    
    if (currentValue === nextValue) {
      return true;
    }
  }
  
  return false;
};
