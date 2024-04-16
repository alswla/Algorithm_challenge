/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
  const numArr = Array.from({ length : n + 1 }, (val, idx) => idx);  
  const binaryArr = numArr.map((val) => val.toString(2));

  const answerArr = binaryArr.map((val) => {
    let count = 0;
    
    for (let i = 0; i < val.length; i += 1) {
      
      if (val[i] === "1"){
        count += 1;  
      }
    }
    
    return count;
  })
  
  return answerArr;
};