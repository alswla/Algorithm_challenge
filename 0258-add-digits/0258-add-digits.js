/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
  let sum = num;
  
  while (sum > 9) {
    let currentSum = 0;
    const digit = sum.toString().split("");
    
    for (let i = 0; i < digit.length; i += 1) {
      currentSum += Number(digit[i]);
    }
    
    sum = currentSum;
  }
  
  return sum;
};
