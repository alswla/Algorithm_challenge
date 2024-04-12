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
  let oneStepPointer = head;
  let twoStepPointer = head;
  
  while (twoStepPointer !== null && twoStepPointer.next !== null) {
    oneStepPointer = oneStepPointer.next;
    twoStepPointer = twoStepPointer.next.next
  }
  
  return oneStepPointer
};
