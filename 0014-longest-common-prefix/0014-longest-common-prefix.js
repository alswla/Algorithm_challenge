/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  if (!strs.length) return "";

 for (let i = 0; i <= strs[0].length; i += 1) {
    if (!strs.every((string) => string[i] === strs[0][i])) {
      return strs[0].slice(0, i);
    }
  }

  return strs[0];
};
