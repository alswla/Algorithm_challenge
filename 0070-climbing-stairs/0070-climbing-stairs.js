/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  if (n < 2) {
    return 1;  
  }
  
  let twoStepBefore = 1;
  let oneStepBefore = 1;
  let nextStepCount = 0;
  
  for (let i = 2; i <= n; i += 1) {
    nextStepCount = oneStepBefore + twoStepBefore;
    twoStepBefore = oneStepBefore;
    oneStepBefore = nextStepCount;
  }
  
  return nextStepCount;    
};
