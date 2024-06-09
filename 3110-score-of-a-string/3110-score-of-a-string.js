/**
 * @param {string} s
 * @return {number}
 */
const scoreOfString = function(s) {
  const stringArr = s.split(""); 
  let answer = 0;
  
  stringArr.forEach((str, index) => {
    if (index !== stringArr.length - 1) {
      const prev = str.charCodeAt(); 
      const next = stringArr[index + 1].charCodeAt();
      
      answer += Math.abs(prev-next);
    }
  })
  
  return answer;
};
