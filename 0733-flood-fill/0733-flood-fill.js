/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function (image, sr, sc, color) {
  const rows = image.length;
  const cols = image[0].length;
  const copiedImage = image.map((arr) => [...arr]);
  const targetPixel = image[sr][sc];
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  
  const imageQueue = [];
  imageQueue.push([sr, sc]);
  
  while (imageQueue.length > 0) {
    [row, col] = imageQueue.shift();
    copiedImage[row][col] = color;
    
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      
      if (
        newRow >= 0 &&
        newCol >= 0 &&
        newRow < rows &&
        newCol < cols &&
        copiedImage[newRow][newCol] === targetPixel &&
        copiedImage[newRow][newCol] !== color
      ) {
        imageQueue.push([newRow, newCol]);
      }
    }
  }
  
  return copiedImage;
};