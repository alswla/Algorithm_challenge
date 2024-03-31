/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  let start = 0;
  let longestString = 0;
  const characterMap = new Map();

  for (let i = 0; i < s.length; i++) {
    let currentChr = s[i];
    let currentChrPosition = characterMap.get(currentChr);

    if (currentChrPosition >= start) {
      start = currentChrPosition + 1;
    }

    characterMap.set(currentChr, i);

    longestString = Math.max(
      longestString,
      i - start + 1
    );
  }
  
  return longestString;
};