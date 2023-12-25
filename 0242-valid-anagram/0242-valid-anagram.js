/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  const sortedStr = s.split("").sort().join("");
  const sortedTarget = t.split("").sort().join("");
  
  return sortedStr === sortedTarget;
};