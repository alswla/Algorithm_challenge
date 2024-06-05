/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  const sorted = nums.sort((a, b) => a - b);
  const answer = [];
  
  for (let i = 0; i < sorted.length - 2; i += 1) {
    if (sorted[i] + sorted[i + 1] + sorted[i + 2] > 0) break;
    if (sorted[i] > 0) break;
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    
    let start = i + 1;
    let end = sorted.length - 1;
    
    while (start < end) {
      const threeSum = sorted[i] + sorted[start] + sorted[end];
      
      if (threeSum === 0) {
        answer.push([sorted[i], sorted[start], sorted[end]]);
        
        while (sorted[start] === sorted[start + 1]) {
          start += 1;
        }
        
        while (sorted[end] === sorted[end - 1]) {
          end -= 1;
        }
        
        start += 1;
        end -= 1;
      } else if (threeSum > 0) {
        end -= 1;
      } else {
        start += 1;
      }
    }
  }
  
  return answer;
};
