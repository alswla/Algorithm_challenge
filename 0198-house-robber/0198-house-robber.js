/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
  let current = 0;
  let previous = 0;
  
  for (let i = 0; i < nums.length; i += 1) {
    let temp = current;
    current = Math.max(nums[i] + previous, current);
    previous = temp;
  }

  return current;
};
