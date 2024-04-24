/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function(temperatures) {
  const answer = Array.from({ length: temperatures.length }).fill(0);
  const stack = [];
  
  for (let i = temperatures.length - 1; i >= 0; i -= 1) {
    while (stack.length > 0 && temperatures[i] >= temperatures[stack[0]]) {
      stack.shift();
    }
    
    if (stack.length === 0) {
      answer[i] = 0;
    } else {
      answer[i] = stack[0] - i;
    }
    
    stack.unshift(i);
  }
  
  return answer;
};
