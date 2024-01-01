/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  if (nums.length === 1) return nums;

  if (nums.every((num) => num < 0)) {
    return Math.max(...nums);
  }
  
  let currentSum = 0;
  let currentMax = 0;
  let currentMin = 0;
  
  for (const num of nums) {        
    currentSum += num;
    currentMin = Math.min(currentSum, currentMin);
    currentMax = Math.max(currentMax, currentSum - currentMin);
  }
  
  return currentMax;
};