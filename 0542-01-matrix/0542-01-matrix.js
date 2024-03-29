/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const queue = [];
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!mat[i][j]) {
        queue.push([i, j])
      } else {
        mat[i][j] = Infinity;
      }
    }
  }

  while (queue.length) {
    const [row, col] = queue.shift();
    
    for (let [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      
      if ( newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols && mat[newRow][newCol] > mat[row][col]) {
         queue.push([newRow, newCol]);
         mat[newRow][newCol] = mat[row][col] + 1;
      }
    }
  }
  
  return mat;
};