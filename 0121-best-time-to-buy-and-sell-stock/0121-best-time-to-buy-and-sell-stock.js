/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let max = 0;
  let buy = prices[0]
  
  for (let i = 1; i < prices.length; i++) {
    let sell = prices[i];
    let profit = sell - buy;
    max = Math.max(profit, max);
    
    if (sell < buy) buy = sell;
  }
  
  return max;
};