/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  const trimedStr = s.toLowerCase();
  let compared = ""
  
  for (let i = 0; i < trimedStr.length; i++) {
    if (trimedStr[i] >= "a" && trimedStr[i] <= "z") {
      compared += trimedStr[i]
    } else if (!isNaN(trimedStr[i])) {
      compared += trimedStr[i]
    };
  }
  
  compared = compared.split(" ").join("");
  const reversed = compared.split("").reverse().join("");
  
  return compared === reversed;
};