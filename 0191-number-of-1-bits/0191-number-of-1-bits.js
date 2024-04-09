/**
 * @param {number} n
 * @return {number}
 */
const hammingWeight = function(n) {
  let count = 0;
  const binaryString = n.toString(2);
  
  for (let i = 0; i < binaryString.length; i += 1) {
    if (binaryString[i] === "1") {
      count += 1;
    }
  }
  
  return count;  
};
