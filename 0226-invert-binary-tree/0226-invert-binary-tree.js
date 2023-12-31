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
 * @return {TreeNode}
 */
const invertTree = function(root) {
  const invertDirections = (node) => {
    if(!node) return null;
    
    const left = invertDirections(node.left);
    const right = invertDirections(node.right);
    
    node.left = right;
    node.right = left;
    
    return node;
  }
  
  return invertDirections(root);
};