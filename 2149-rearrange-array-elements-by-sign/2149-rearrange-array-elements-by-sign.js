/**
 * @param {number[]} nums
 * @return {number[]}
 */
const rearrangeArray = function(nums) {
  if (nums.length === 2) {
    return nums.sort((a, b) => b - a);
  } 
  
  const positive = nums.filter((num) => num > 0);
  const negative = nums.filter((num) => num < 0);
  const result = [];
  
  for (let i = 0; i < positive.length; i += 1) {
    result.push(positive[i]);
    result.push(negative[i]);
  }
  
  return result;
};
