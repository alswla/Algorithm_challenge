/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(root) {
  if (!root) return false;
  
  function isSame (leftNode, rightNode) {
    if ((!leftNode && rightNode) || (leftNode && !rightNode) || (leftNode && rightNode && leftNode.val !== rightNode.val)) {
      return false
    } 
    
    if (leftNode && rightNode) {
      return isSame(leftNode.left, rightNode.right) && isSame(rightNode.left, leftNode.right);
    }
    
    return true;
  }
  
  return isSame(root.left, root.right);
};
