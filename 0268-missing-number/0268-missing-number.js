/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  const numsArray = Array.from({ length: nums.length + 1 }, (val, idx) => idx);
  const missingNumber = numsArray.filter((num) => !nums.includes(num))[0];

  return missingNumber;
};