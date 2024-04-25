/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function(n) {
  const reversedStringNum = n.toString(2).split("").reverse().join("");
  const result = reversedStringNum.padEnd(32,"0"); 
  
  return parseInt(result, 2);
};
