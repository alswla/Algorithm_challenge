/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
 let current = 0; 
 let next = 0;
 let last = nums.length - 1;
  
  while (next <= last) {
    if (nums[next] === 0) {
      [nums[current], nums[next]] = [nums[next], nums[current]];
      current += 1;
      next += 1;
    } else if (nums[next] === 1) {
      next += 1;
    } else {
      [nums[next], nums[last]] = [nums[last], nums[next]];
      last -= 1;
    }
  }
};