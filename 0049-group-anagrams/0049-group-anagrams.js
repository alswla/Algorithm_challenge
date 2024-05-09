/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  const strObj = {};
  
  for (const str of strs) {
    const sorted = str.split("").sort().join("");
    
    if (!strObj[sorted]) {
      strObj[sorted] = [str];
    } else {
      strObj[sorted].push(str);
    }
  }

  return Object.values(strObj);
};
