/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
  const answer = new Array(nums.length);

  answer[0] = 1; 
  
  for (let i = 1; i < nums.length; i += 1) {
    answer[i] = answer[i - 1] * nums[i - 1]; 
  }

  let rightNum = 1; 
  
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    answer[i] *= rightNum; 
    rightNum *= nums[i]; 
  }
  
  return answer;
};
