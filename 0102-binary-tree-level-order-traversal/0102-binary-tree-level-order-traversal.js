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
 * @return {number[][]}
 */
const levelOrder = function(root) {
  const levelList = [];
  const currentLevelNodes = [];
  
  if (root) {
    currentLevelNodes.push(root)
  }
  
  while (currentLevelNodes.length > 0) {
    const sameLevelNodes = [];
    const length = currentLevelNodes.length;
    
    for (let i = 0; i < length; i += 1) {
      const node = currentLevelNodes.shift();
      
      sameLevelNodes.push(node.val);
      
      if (node.left) {
        currentLevelNodes.push(node.left);
      }
      
      if (node.right) {
        currentLevelNodes.push(node.right);
      }
    }
    
    levelList.push(sameLevelNodes);
  }
  
  return levelList;  
};
