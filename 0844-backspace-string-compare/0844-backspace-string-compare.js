/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function(s, t) {
  function getWord(str) {
    let result = [];
    
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === "#") {
        result.pop();
      } else {
        result.push(str[i]);
      }
    }
    
    return result.join("");
  }
  
  const resultOfs = getWord(s);
  const resultOft = getWord(t);
  
  return resultOfs === resultOft;
};
