/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  let islandCount = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  
  function findIsland(row, col) {
    const movingQueue = [[row, col]];
    let islandWidth = 0;
    
    while (movingQueue.length > 0) {
      const [curRow, curCol] = movingQueue.shift();
      
      for (let i = 0; i < directions.length; i += 1) {
        const dx = directions[i][0];
        const dy = directions[i][1];
        
        const newRow = curRow + dx;
        const newCol = curCol + dy;
        
       if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] === "1" && !visited[newRow][newCol]) {
          visited[newRow][newCol] = true; // Mark as visited
          movingQueue.push([newRow, newCol]);
        }
      }
    }
    
    return islandWidth;
  }

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
       if (grid[i][j] === "1" && !visited[i][j]) {
         islandCount += 1;
         findIsland(i, j)
       }
    }
  }
  
  return islandCount;    
};