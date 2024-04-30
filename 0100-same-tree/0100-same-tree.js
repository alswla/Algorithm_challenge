/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
  if(!p && !q) return true;
  if(p === null && q !== null || p !== null && q === null) return false;
  if(p.val !== q.val) return false;
  
  function isSameNode(leftNode, rightNode) {
     if ((!leftNode && rightNode) || (leftNode && !rightNode) || (leftNode && rightNode && leftNode.val !== rightNode.val)) {
      return false
    } 

    if (leftNode && rightNode) {
      return isSameNode(leftNode.left, rightNode.left) && isSameNode(rightNode.right, leftNode.right);
    }

    return true;
  }
  
  return isSameNode(p.left, q.left) && isSameNode(p.right, q.right);
};
