/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function(s) {
  const targetNum = parseInt(s);
  const isOutOfRange = Math.abs(targetNum) > Math.pow(2, 31) - 1

  if(isNaN(targetNum)) {
    return 0;
  } else if (isOutOfRange) {
    return targetNum < 0 ? -(Math.pow(2,31)) : Math.pow(2, 31) - 1
  } else {
    return targetNum;
  }
};
