/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function(s, wordDict) {
  const wordArr = Array.from({ length : s.length + 1 }).fill(false);
  wordArr[0] = true;
  
  for (let i = 1; i <= s.length; i += 1) {
    for (const word of wordDict) {
      if (i - word.length >= 0 && wordArr[i - word.length] && s.substring(i - word.length, i) === word) {
        wordArr[i] = true;
        break;
      }
    }
  }
  
  return wordArr[s.length];  
};
