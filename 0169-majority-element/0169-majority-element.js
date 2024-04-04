/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  const minCount = nums.length / 2;
  const countObj = {}
  let answer = 0;
  
  for (let i = 0; i < nums.length; i += 1) {
    const key = nums[i];
    
    if (!countObj[key]) {
      countObj[key] = 1;
    } else {
      countObj[key] += 1;
    }
  }
  
  for (const [key, value] of Object.entries(countObj)) {
    if (value >= minCount) {
      return Number(key);
    }
  }
};