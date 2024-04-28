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
 * @return {number}
 */
const maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  
  let depth = 0;
  const stack = [];
  stack.push(root);
  
  while (stack.length > 0) {
    const length = stack.length;
    depth += 1;
    
    for (let i = 0; i < length; i += 1) {
      const node = stack.shift();
      
      if (node.left) {
        stack.push(node.left);
      }
      
      if (node.right) {
        stack.push(node.right);
      }
    }
  }
  
  return depth;
};
