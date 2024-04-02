/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
  
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
    }
  }
  
  return dp[amount] === Infinity ? -1 : dp[amount];
};