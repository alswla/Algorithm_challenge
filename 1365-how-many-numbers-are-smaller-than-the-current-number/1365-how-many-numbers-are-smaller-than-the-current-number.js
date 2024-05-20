/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function(nums) {
  const stack = [];
  
  for (let i = 0; i < nums.length; i += 1) {
    const targetNumber = nums[i];
    let count = 0;
    
    for (let j = 0; j < nums.length; j += 1) {
      if (nums[j] < targetNumber && j !== i) {
        count += 1;
      }
    }
    
    stack.push(count);
  }
  
  return stack;
};
