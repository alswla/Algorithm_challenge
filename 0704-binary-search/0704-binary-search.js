/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let middle = Math.floor((start + end) / 2);
 
  const recur = (s ,m, e) => {
    m = Math.floor((s + e) / 2);

    if(target === nums[m]) return m;
    if(s > e) return -1; 

    if(target > nums[m]){
      return recur(m + 1, m, e);
    } else {
      return recur(s, m, m - 1);
    }
  }
  
  return recur(start, middle, end);
};