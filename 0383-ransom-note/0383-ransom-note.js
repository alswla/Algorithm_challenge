/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
   if (ransomNote.length > magazine.length) {
    return false;
  }
  
  const magazineObj = {};
  
  for (let i = 0; i < magazine.length; i += 1) {
    const key = magazine[i];
    
    if (!magazineObj[key]) {
      magazineObj[key] = 1;
    } else {
      magazineObj[key] += 1;
    }
  }
  
  for (let i = 0; i < ransomNote.length; i += 1) {
    const char = ransomNote[i];
    
    if (magazineObj[char]) {
      if (!magazineObj[char]) {
        return false;
      }
      
      magazineObj[char] -= 1;
    } else {
      return false;
    }
  } 
  
  return true;
};