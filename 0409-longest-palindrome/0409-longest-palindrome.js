/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  const countObj = {};
  let answer = 0;
  
  s.split("").forEach((chr) => {
    if (countObj[chr]) {
      countObj[chr] += 1;
    } else {
      countObj[chr] = 1;
    }
  })

  Object.values(countObj).forEach((count) => {
    answer += Math.floor(count / 2) * 2;
  })
  
  return answer < s.length ? answer + 1 : answer;
};
