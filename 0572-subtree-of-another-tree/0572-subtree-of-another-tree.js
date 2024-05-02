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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = function(root, subRoot) {
 if(!root) return false;
  
  function isSame(mainNode, subNode) {
    if ((!mainNode && subNode || mainNode && !subNode || mainNode && subNode && mainNode.val !== subNode.val)) return false;
    
    if (mainNode && subNode) {
      return isSame(mainNode.left, subNode.left) && isSame(mainNode.right, subNode.right);
    }
    
    return true;
  }
  
  if(isSame(root, subRoot)) return true
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
