/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
  let maxReach = 0;
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    if (i > maxReach) {
      return false;
    }
  
    maxReach = Math.max(maxReach, i + nums[i]);
  
    if (maxReach >= length - 1) {
      return true;
    }
  }

  return false;
};
