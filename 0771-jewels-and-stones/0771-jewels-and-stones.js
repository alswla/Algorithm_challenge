/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function(jewels, stones) {
  let count = 0;
  
  stones.split("").forEach((stone) => {
    if (jewels.includes(stone)) {
      count += 1;
    }
  })
  
  return count;
};
