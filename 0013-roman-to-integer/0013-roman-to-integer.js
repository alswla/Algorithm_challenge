/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  let sum = 0;
  const romanChart = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  
  for (let i = 0; i < s.length; i += 1) {
    const current = s[i];
    const next = s[i + 1];
    const currentInt = romanChart[current];
    const nextInt = romanChart[next];
    const canReplace = nextInt % 5 === 0 && currentInt < nextInt;
    
    if (canReplace && next) {
      sum += (nextInt - currentInt);
      i += 1;
    } else {
      sum += currentInt;
    }
  }
  
  return sum;
};
