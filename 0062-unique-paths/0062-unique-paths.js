/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
 const pathGrids = Array.from({ length : m }, () => Array.from({ length : n }, () => 0));
  
  for (let row = 0; row < m; row += 1) {
    for (let col = 0; col < n; col += 1) {
      if (row === 0 || col === 0) {
        pathGrids[row][col] = 1;
      } else {
        pathGrids[row][col] = pathGrids[row - 1][col] + pathGrids[row][col - 1];
      }
    }
  }
  
  return pathGrids[m - 1][n - 1]
};