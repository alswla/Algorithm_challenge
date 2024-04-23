/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  const str = x.toString()
  let start = 0
  let length = str.length - 1

  while (start < length){
    if(str[start] !== str[length]) return false
    
    start += 1;
    length -= 1;
  }

  return true
};
