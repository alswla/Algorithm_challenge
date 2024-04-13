/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  
  const numObj = {};
  
  for (const num of nums) {
    if (!numObj[num]) {
      numObj[num] = 1;
    } else {
      numObj[num] += 1;
    }
  }

  const numArr = Object.entries(numObj);
  
  for ([num, count] of numArr) {
    if (count === 1) {
      return Number(num);
    }
  } 
};
