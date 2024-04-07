/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  const numberSet = new Set(nums); 
  
  return numberSet.size !== nums.length  
};